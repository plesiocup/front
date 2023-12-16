import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { H3 } from '@/components/ui/typography'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigation = useNavigate()
  const onSubmit = (data: any) => {
    navigation(`/search/${data.search}`)
  }

  return (
    <header className='border-b-[1px] py-3 fixed w-full bg-black top-0 left-0 z-30'>
      <div className=' container flex flex-row justify-between'>
        <Link to='/'>
          <H3 className='m-0'>Logo</H3>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex w-full max-w-sm items-center space-x-2'>
            {errors.search && <span>This field is required</span>}
            <Input
              type='text'
              placeholder='Search'
              id='search'
              {...register('search', { required: true })}
            />
            <Button type='submit'>Search</Button>
          </div>
        </form>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

export default Header
