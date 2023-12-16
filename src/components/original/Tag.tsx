import { P } from '../ui/typography'

type TagProps = {
  children: React.ReactNode
}

const Tag: React.FC<TagProps> = (props) => {
  const { children } = props
  return (
    <div className='bg-gray-200 rounded px-1 py-[0.2rem]'>
      <P className=' text-xs text-black'>{children}</P>
    </div>
  )
}

export default Tag
