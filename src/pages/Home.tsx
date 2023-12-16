import Header from '@/components/original/Header'
import Item from '@/components/original/Item'
import { Separator } from '@/components/ui/separator'
import { H3, P } from '@/components/ui/typography'
import { ItemData } from '@/types/custom/itemData'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchRecommends = async () => {
  const data = await axios.request<ItemData[]>({
    method: 'get',
    url: '/userbasedRecommend',
  })
  console.log(data)

  return data
}

function Home() {
  // const itemList: ItemData = useQuery(['recommends'], fetchRecommends)
  const { data, error, isLoading } = useQuery({
    queryKey: ['recommends'],
    queryFn: fetchRecommends,
  })
  const itemList: ItemData[] | undefined = data?.data

  // const form = useForm<>()

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
        <div className='container mx-auto my-0'>
          <H3 className='mt-12'>Historys</H3>
          <Separator className='my-4' />
        </div>
        <div className='w-full'>
          {isLoading ? (
            <P className='text-white'>Loading...</P>
          ) : error ? (
            <P className='text-white'>Error: {error.message}</P>
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
