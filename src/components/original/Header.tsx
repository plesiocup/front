import { Input } from '@/components/ui/input'
import { H3, P } from '@/components/ui/typography'
import Cookies from 'js-cookie'
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
  const userMail = Cookies.get('userMail')

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
          </div>
        </form>
        <div className='flex flex-row items-center space-x-2'>
          {userMail ? (
            <>
              <P className='m-0'>{userMail}</P>
              <button
                onClick={() => {
                  Cookies.remove('userMail')
                  Cookies.remove('jwt')
                  navigation('/')
                }}
              >
                <P className='m-0'>Logout</P>
              </button>
            </>
          ) : (
            <>
              <Link to='/login'>
                <P className='m-0'>Login</P>
              </Link>
              <Link to='/signup'>
                <P className='m-0'>Signup</P>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
