import Header from '@/components/original/Header'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import crypto from 'crypto-js'
import Cookies from 'js-cookie'
import { useState } from 'react'
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
  const data = await axios.request<LoginResponse>({
    method: 'get',
    url: `/login`,
    data: {
      email: reqData.Email,
      password: reqData.Password,
    },
  })

  return data
}

export function Login() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm()
  const [error, setError] = useState('')

  const navigation = useNavigate()
  const onSubmit = async (submitData: any) => {
    submitData.Password = crypto.AES.encrypt(submitData.Password, 'secret').toString()
    const data = (await fetchLogin(submitData)).data
    if (data.token === undefined) {
      setError('email or password is wrong')
      return
    }
    const jwtToken = data.token
    Cookies.set('jwt', jwtToken)
    navigation('/')
  }

  return (
    <>
      <Header />
      <div className='mb-5 pt-[65px]'>
        <h1>login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col w-full max-w-sm items-center space-x-2'>
            <Input
              type='text'
              placeholder='Email'
              id='email'
              {...register('email', {
                pattern: {
                  value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
                  message: '入力形式がメールアドレスではありません。',
                },
              })}
            />
            <Input
              type='text'
              placeholder='Password'
              id='password'
              {...register('password', { required: true, minLength: 8 })}
            />
            <button type='submit'>login</button>
            {error && <p className='text-red-500'>{error}</p>}
          </div>
        </form>
      </div>
    </>
  )
}
