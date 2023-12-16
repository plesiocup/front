import Header from '@/components/original/Header'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import crypto from 'crypto-js'
import { useState } from 'react'
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
  const data = await axios.request<SignUpResponse>({
    method: 'get',
    url: `/signup`,
    data: {
      UserName: reqData.UserName,
      Email: reqData.Email,
      Role: reqData.Role,
      Password: reqData.Password,
    },
  })
  return data
}

export function Signup() {
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState('')

  const navigation = useNavigate()
  const onSubmit = async (submitData: any) => {
    submitData.Password = crypto.AES.encrypt(submitData.Password, 'secret').toString()
    const data = (await fetchSignUp(submitData)).data
    if (data === undefined) {
      setError('email or password is wrong')
      return
    } else {
      navigation('/login')
    }
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
