import Header from '@/components/original/Header'
import Tag from '@/components/original/Tag'
import { Button } from '@/components/ui/button'
import { H1, P } from '@/components/ui/typography'
import { ItemData } from '@/types/custom/itemData'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ReactStars from 'react-stars'

const contentbasedRecommend = async (searchId: string, user: string) => {
  const data = await axios.request<ItemData>({
    method: 'get',
    url: `/contentbasedRecommend?searchId=${searchId}?user=${user}`,
  })

  return data
}

function About() {
  // cookieからjwtを取得、なければloginに飛ばす
  if (Cookies.get('jwt') === undefined) {
    const navigation = useNavigate()
    navigation('/login')
  }
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchId = queryParams.get('searchId')
  const user = queryParams.get('user')

  const { data, error, isLoading } = useQuery({
    queryKey: ['aboutData'],
    queryFn: () => contentbasedRecommend(searchId || '', user || ''),
  })
  const item: ItemData | undefined = data?.data
  if (item === undefined) {
    return <div>error</div>
  }
  // 分単位から時間単位に変換
  const time = `${Math.floor(item.play_time / 60)}時間${
    item.play_time % 60 >= 10 ? item.play_time % 60 : '0' + (item.play_time % 60) + '分'
  }`

  return (
    <>
      <Header />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error!!</p>
      ) : (
        <div
          className='relative w-screen h-screen '
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${item?.image_url})`,
            backgroundSize: 'cover',
          }}
        >
          <div className='container h-full pt-[65px] flex flex-col justify-center gap-5 py-12'>
            <H1 className='text-white'>{item?.title}</H1>
            <P className='text-white'>{item?.description}</P>
            <div className='flex justify-between items-end'>
              <div className='flex gap-3'>
                <ReactStars
                  count={5}
                  value={item.evaluation}
                  edit={false}
                  color2={'#ffd700'}
                />
                <P className=' text-base text-white'>{item.release_year}</P>
                <P className=' text-base text-white'>{time}</P>
                <Tag>{item.category}</Tag>
              </div>
              <Link to={`${item.movie_url}`}>
                <Button variant='secondary'>Go to movie</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default About
