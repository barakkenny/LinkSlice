import React from 'react'
import { useSearchParams } from 'next/navigation';


const Auth = () => {
const searchParams = useSearchParams();


  return (
    <section className='mt-36 flex flex-col items-center gap-10'>
      <h1 className='text-5xl font-extrabold'>
        {searchParams.get('createNew') ?
        "Hold up! Let's login first.."
        : "Login / Signup"
        }
        </h1>
    </section>
  )
}

export default Auth
