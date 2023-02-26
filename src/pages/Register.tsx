import Head from 'next/head'

import { useForm } from 'react-hook-form';

import Layout from '@/Components/Layout'

type FormValues = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    gender: string,
    rilkh: boolean,
}

export default function Home() {
    const {
      register,
      handleSubmit,
      watch,
      formState: {errors, isSubmitting},
    } = useForm<FormValues>();

    console.log(watch(['firstName', 'lastName']))
    console.log("error woyy", errors)

  return (
    <Layout>
        <Head>
          <title>Lita</title>
          <meta name="description" content="width-device-width, Initial-scale-1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className='w-full m-auto bg-gradient-to-b from-[#1d1c30] to-[#301c1c]'>
              <div className='pt-52'>
                <h1 className='text-5xl text-white opacity-75 text-center font family-Georgia tracking-widest'>
                      WELCOME
                </h1>
              </div>
            <section className='min-h-screen flex items-center flex-col justify-center'>
                <form onSubmit={handleSubmit((data) =>  {
                    console.log(data)
                  })} className='flex flex-col gap-3' action="">

                    <p className='flex flex-col text-gray-400 font-semibold items-center'>
                        Insert your data
                    </p>
                    <input {...register("firstName", {required: 'Isi dongg', minLength:{value:4, message:'Minimal 4'}})} type="text"  placeholder='First Name' />
                      <p className='text-red-500/70'> {errors.firstName?.message} </p>
                    <input {...register("lastName", {required: 'Isi dongg'})} type="text" placeholder='Last Name' />
                    <p className='text-red-500/70'> {errors.lastName?.message} </p>
                    <input {...register("lastName", {required: 'Isi dongg'})} type="email" placeholder='Email' />
                    <p className='text-red-500/70'> {errors.lastName?.message} </p>
                    <input {...register("lastName", {required: 'Isi dongg'})} type="tel" placeholder='Phone Number' />
                    <p className='text-red-500/70'> {errors.lastName?.message} </p>
                    <label className='text-white' htmlFor="Gender">Gender</label>
                        <select {...register("gender")}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <label className='text-white' htmlFor="rilkh">Apakah data diatas sudah benar?</label>
                        <div className='flex gap-3'>
                            <label className='text-white' htmlFor="">Yes</label>
                            <input {...register("rilkh")} type="radio" value="Yes" />
                            <label className='text-white' htmlFor="">No</label>
                            <input {...register("rilkh")} type="radio" value="No" />
                        </div>
                        <input type="Submit" className='text-white bg-blue-500 py-1 rounded-xl'/>
                </form>
            </section>
        </main>
      </Layout>
  )
}
