import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { H3 } from '@/components/ui/typography'

function Header() {
  return (
    <header className='border-b-[1px] py-3'>
      <div className=' container flex flex-row justify-between'>
        <H3 className='m-0'>Logo</H3>
        <div className='flex w-full max-w-sm items-center space-x-2'>
          <Input type='email' placeholder='Email' />
          <Button type='submit'>Subscribe</Button>
        </div>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

export default Header
