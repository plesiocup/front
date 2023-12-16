import Header from '@/components/original/Header'
import Item from '@/components/original/Item'
import { Separator } from '@/components/ui/separator'
import { H3 } from '@/components/ui/typography'
import { ItemData } from '@/types/custom/itemData'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const getSearchId = async (value: string) => {
  const data = await axios.request<string>({
    method: 'get',
    url: `/getSearchId?searchValue=${value}`,
  })
  return data
}

const getSearchedData = async (searchId: string) => {
  const data = await axios.request<ItemData[]>({
    method: 'get',
    url: `/getSearchedData?searchId=${searchId}`,
  })

  return data
}

function SearchResult() {
  // const itemList: ItemData = useQuery(['recommends'], fetchRecommends)
  const { value } = useParams()

  const responseSearchId = useQuery({
    queryKey: ['searchId'],
    queryFn: () => getSearchId(value || ''),
  })

  const searchId: string | undefined = responseSearchId.data?.data
  console.log('🙇‍♂️🙇‍♂️', searchId)

  const { data, error, isLoading } = useQuery({
    queryKey: ['searchData'],
    queryFn: () => getSearchedData(searchId || ''),
  })
  const itemList: ItemData[] | undefined = data?.data
  console.log('🎂🎂🎂', itemList)

  return (
    <>
      <Header />
      <div className='mb-5 pt-[65px]'>
        <div className='container mx-auto my-0'>
          <H3 className='mt-12'>Search</H3>
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

export default SearchResult
