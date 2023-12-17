import Header from '@/components/original/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { SHA256 } from 'crypto-js'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface LoginResponse {
  token: string
}

interface LoginRequest {
  Email: string
  Password: string
}

const fetchLogin = async (reqData: LoginRequest) => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  Cookies.set('userMail', reqData.Email)

  const data = await axios.request<LoginResponse>({
    method: 'post',
    url: `${baseUrl}/login`,
    data: {
      email: reqData.Email,
      password: reqData.Password,
    },
  })
  console.log(data)

  return data
}

export function Login() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm()
  const navigation = useNavigate()

  const { mutate, data, error } = useMutation({
    mutationFn: fetchLogin,
    onSuccess: (data) => {
      const jwtToken = data?.data.token
      Cookies.set('jwt', jwtToken)

      console.log(Cookies.get('jwt'))

      navigation('/')
    },
  })
  const onSubmit = async (submitData: any) => {
    submitData.Password = SHA256(submitData.Password).toString()
    console.log(submitData)
    mutate({ ...submitData })
  }

  return (
    <>
      <Header />
      <div className='mb-5 pt-[65px] flex justify-center container'>
        <div className='flex flex-col gap-3 w-full max-w-sm items-center space-x-2'>
          <h1 className='mt-4'>login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2 w-full max-w-sm items-center space-x-2'>
              <Input
                type='email'
                placeholder='Email'
                id='email'
                {...register('Email', {
                  pattern: {
                    value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
                    message: '入力形式がメールアドレスではありません。',
                  },
                })}
              />
              <Input
                type='password'
                placeholder='Password'
                id='password'
                {...register('Password', { required: true, minLength: 8 })}
              />
              <Button type='submit'>login</Button>
              {/* 401なら「パスワードが合致していません」 */}
              {/* {error && <p className='text-red-500'>{error.response.data.message}</p>} */}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
