import Header from '@/components/original/Header'
import { H1 } from '@/components/ui/typography'

function Notfound() {
  return (
    <>
      <Header />
      <div className='mb-5 pt-[65px]'>
        <H1>404 Not Found</H1>
      </div>
    </>
  )
}

export default Notfound
