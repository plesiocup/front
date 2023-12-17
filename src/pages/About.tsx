import Header from '@/components/original/Header'
import Item from '@/components/original/Item'
import Tag from '@/components/original/Tag'
import { Button } from '@/components/ui/button'
import { H1, H3, P } from '@/components/ui/typography'
import { ItemData } from '@/types/custom/itemData'
import { Separator } from '@radix-ui/react-separator'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import ReactStars from 'react-stars'

interface getMovieDataResponse {
  movie: ItemData
}

const contentbasedRecommend = async (category: string) => {
  // const baseUrl = import.meta.env.VITE_BASE_URL
  const baseUrl = ''

  const data = await axios.request<ItemData[]>({
    method: 'get',
    url: `${baseUrl}/contentbasedRecommend/${category}`,
    headers: {
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    },
  })
  return data
}

const getMovieData = async (movieId: string) => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  // const baseUrl = ''
  const data = await axios.request<getMovieDataResponse>({
    method: 'get',
    url: `${baseUrl}/auth/getMovie/${movieId}`,
    headers: {
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    },
  })
  return data
}

const fetchEvaluation = async (movieId: string, rating: number) => {
  console.log(movieId, rating)
  const baseUrl = import.meta.env.VITE_BASE_URL
  const data = await axios.request({
    method: 'put',
    url: `${baseUrl}/auth/evaluate/${movieId}`,
    data: {
      user_eval: parseFloat(rating.toString()),
    },
    headers: {
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    },
  })

  return data
}

function About() {
  const [rating, setRating] = useState(0)

  // cookieからjwtを取得、なければloginに飛ばす
  if (Cookies.get('jwt') === undefined) {
    const navigation = useNavigate()
    navigation('/login')
  }

  const [searchParams] = useSearchParams()

  const navigation = useNavigate()
  const movieId = searchParams.get('Id')
  const category = searchParams.get('Category')

  if (movieId === null || category === null) {
    navigation('/')
    return
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ['aboutData'],
    queryFn: () => getMovieData(movieId),
  })
  console.log('🎂' + data?.data.movie.Title)

  // dataを別名で定義
  const {
    data: recommendData,
    error: recommendError,
    // isLoading: recommendIsLoading,
  } = useQuery({
    queryKey: ['recommendData'],
    queryFn: () => contentbasedRecommend(category),
  })
  console.log(recommendData?.data)

  const aboutItem: ItemData | undefined = data?.data.movie
  const recommendItemList: ItemData[] | undefined = recommendData?.data
  if (aboutItem === undefined) {
    return <div>error</div>
  }
  // 分単位から時間単位に変換
  const time = `${Math.floor(aboutItem.Playtime / 60)}時間${
    aboutItem.Playtime % 60 >= 10
      ? aboutItem.Playtime % 60
      : '0' + (aboutItem.Playtime % 60) + '分'
  }`

  return (
    <>
      <Header />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error!!</p>
      ) : (
        <>
          <div
            className='relative w-screen h-screen '
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${aboutItem?.ImageURL})`,
              backgroundSize: 'cover',
            }}
          >
            <div className='container h-full pt-[65px] flex flex-col justify-center gap-5 py-12'>
              <H1 className='text-white'>{aboutItem?.Title}</H1>
              <P className='text-white'>{aboutItem?.Description}</P>
              <div className='flex justify-between items-end'>
                <div className='flex gap-3'>
                  <ReactStars
                    count={5}
                    value={aboutItem.Evaluation}
                    edit={false}
                    color2={'#ffd700'}
                  />
                  <P className=' text-base text-white'>{aboutItem.ReleaseYear}</P>
                  <P className=' text-base text-white'>{time}</P>
                  <Tag>{aboutItem.Category}</Tag>
                </div>
                <div className='flex gap-3'>
                  <P className=' text-base text-white'>評価を付けよう</P>
                  <ReactStars
                    count={5}
                    edit={true}
                    value={rating}
                    color2={'#ffd700'}
                    onChange={(newRating) => {
                      setRating(newRating)
                      fetchEvaluation(movieId || '', newRating)
                    }}
                  />
                </div>
                <Link to={`${aboutItem.MovieURL}`}>
                  <Button variant='secondary'>Go to movie</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className='mb-5 pt-[65px] bg-black'>
            <div className='container mx-auto my-0'>
              <H3 className='mt-12'>Recommends</H3>
              <Separator className='my-4' />
            </div>
            <div className='w-full'>
              {isLoading ? (
                <p>Loading...</p>
              ) : recommendError ? (
                <p>Error: {recommendError.message}</p>
              ) : (
                <div className='grid grid-cols-3 gap-12 container mx-auto my-0'>
                  {recommendItemList?.map((item, index) => (
                    <Item key={index} item={item}></Item>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default About
