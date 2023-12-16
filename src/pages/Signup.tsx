import Header from '@/components/original/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import crypto from 'crypto-js'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface SignUpResponse {
  token: string
}
interface SignUpRequest {
  UserName: string
  Email: string
  Role: number
  Password: string
}

const fetchSignUp = async (reqData: SignUpRequest) => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  console.log(reqData)

  await axios
    .request<SignUpResponse>({
      method: 'post',
      url: `${baseUrl}/signup`,
      data: {
        username: reqData.UserName,
        email: reqData.Email,
        role: reqData.Role,
        password: reqData.Password,
      },
    })
    .then((res) => res.data)
}

export const startLogin = ({ email, password }: any) =>
  axios.post('loginEndpoint', { email, password }).then((res) => res.data)

export function Signup() {
  const { register, handleSubmit } = useForm()

  const navigation = useNavigate()

  const { mutate, data, error } = useMutation({
    mutationFn: fetchSignUp,
    onSuccess: (data) => {
      navigation('/login')
    },
  })

  const onSubmit = async (submitData: any) => {
    submitData.Role = 1
    submitData.Password = crypto.AES.encrypt(submitData.Password, 'secret').toString()
    mutate({ ...submitData })
  }

  return (
    <>
      <Header />
      <div className='mb-5 pt-[65px] flex justify-center container'>
        <div className='flex flex-col gap-3 w-full max-w-sm items-center space-x-2'>
          <h1 className='mt-4'>SignUp</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2 w-full max-w-sm items-center space-x-2'>
              <Input
                type='text'
                placeholder='UserName'
                id='UserName'
                {...register('UserName', { required: true, minLength: 1 })}
              />
              <Input
                type='text'
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
                type='text'
                placeholder='Password'
                id='Password'
                {...register('Password', { required: true, minLength: 8 })}
              />
              <Button type='submit'>SignUp</Button>
              {error && <p className='text-red-500'>{error.message}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
