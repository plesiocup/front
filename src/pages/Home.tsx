import Header from '@/components/original/Header'
import Item from '@/components/original/Item'
import { Separator } from '@/components/ui/separator'
import { H3 } from '@/components/ui/typography'
import { ItemData } from '@/types/custom/itemData'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const fetchRecommends = async () => {
  const baseUrl = import.meta.env.VITE_BASE_URL

  const data = await axios.request<ItemData[]>({
    method: 'get',
    url: `${baseUrl}/auth/userbasedRecommend`,
    // url: `/auth/userbasedRecommend`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    },
  })
  return data
}

function Home() {
  // cookieからjwtを取得、なければloginに飛ばす
  if (Cookies.get('jwt') === undefined) {
    const navigation = useNavigate()
    navigation('/login')
  }
  const { data, error, isLoading } = useQuery({
    queryKey: ['recommends'],
    queryFn: () => fetchRecommends(),
  })
  const itemList: ItemData[] | undefined = data?.data

  return (
    <>
      <Header />
      <div className='mb-5 pt-[65px]'>
        <div className='container mx-auto my-0'>
          <H3 className='mt-12'>Recommends</H3>
          <Separator className='my-4' />
        </div>
        <div className='w-full'>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <div className='grid grid-cols-3 gap-12 container mx-auto my-0'>
              {itemList?.map((item, index) => <Item key={index} item={item}></Item>)}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
