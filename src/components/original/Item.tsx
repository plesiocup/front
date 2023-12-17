import { ItemData } from '@/types/custom/itemData'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import { P } from '../ui/typography'
import Tag from './Tag'

interface ItemProps {
  item: ItemData
}

const Item = ({ item }: ItemProps) => {
  // 分単位から時間単位に変換
  const time = `${Math.floor(item.Playtime / 60)}:${
    item.Playtime % 60 >= 10 ? item.Playtime % 60 : '0' + (item.Playtime % 60)
  }`
  return (
    <>
      {/* <div className='flex flex-col w-full items-center bg-white rounded-[6px]'>
       */}
      <Link to={`/about?Id=${item.Id}&Category=${item.Category}`}>
        <div className=' group flex flex-col w-full items-center bg-white rounded-[6px]'>
          <AspectRatio
            ratio={16 / 9}
            className=' relative w-full h-[150px] rounded-[6px_6px_0px_0px] overflow-hidden'
          >
            <img
              src={item.ImageURL}
              alt='Image'
              className='w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:opacity-90 '
            />
            <div className='absolute bottom-1 right-1'>
              <Tag>{time}</Tag>
            </div>
          </AspectRatio>
          <div className='flex flex-col items-start gap-[10px] px-[19px] py-[12px] self-stretch w-full flex-[0_0_auto] bg-white rounded-[0px_0px_6px_6px]'>
            <div className='flex flex-col items-start gap-1 self-stretch w-full flex-[0_0_auto]'>
              <P className=' text-lg text-black'>{item.Title}</P>
              <div className='flex gap-2 items-center'>
                <ReactStars
                  count={5}
                  value={item.Evaluation}
                  edit={false}
                  color2={'#ffd700'}
                />
                <P className=' text-xs text-black'>{item.ReleaseYear}</P>
                <Tag>{item.Category}</Tag>
              </div>
              <P className='text-slate-500 text-sm line-clamp-2 leading-6'>
                {item.Description}
              </P>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Item
