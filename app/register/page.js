"use client"
import { FormControl, FormField, FormItem, FormLabel,Form } from '@/components/ui/form'
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const schema = yup.object({
  email: yup.string().email("Email must be a valid email address").required("Email required"),
  user_name:yup.string().required("User name reuired"),
  password: yup
    .string()
    .required("Password required")
    .min(6, "Password Minimum length 6 numbers").required("Password required")

}).required();
const Login = () => {
 
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='items-center p-6 border border-red-600 shadow-2xl w-68'> 
        <h1 className='my-4 text-4xl font-semibold text-center text-redColor'>Register</h1>
        <div >
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 '>
        <Input  type="text" placeholder="User name"  {...register("email")} />
        <p className='text-xs text-red-600'>{errors.user_name?.message}</p>
        <Input type="email" placeholder="Email" {...register("email")} />
        <p className='text-xs text-red-600'>{errors.email?.message}</p>

        <Input type="password" placeholder="Password" />
        <p className='text-xs text-red-600 '>{errors.password?.message}</p>

        <Button>Register</Button>
    </form>

  </div>
      </div>
    </div>
  )
}

export default Login