'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Login = () => {
    const router = useRouter()

  return (
    <nav>
      <Link href='/' className='flex items-center gap-x-1'>
      <Image 
      src="/url-trim-png.png"
      alt='web-logo'
      width={50}
      height={50}
      />    
      <h3>ffdfd</h3>
      </Link>
    
      <button onClick={()=> router.push('/')}>Login</button>
    </nav>
  )
}

export default Login
