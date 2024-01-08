import Image from 'next/image'
import styles from './page.module.css'
import LoginPanel from './components/TheLoginPanel'

export default function Home() {
  return (
    <main>
      <div className='flex h-screen'>
        <div className='flex-1 relative'>
          <Image
            src='https://source.unsplash.com/random?woods'
            alt='Authentication'
            fill
            style={
              { objectFit: 'cover' }
            }
          />
        </div>
        <div className='flex-1 flex flex-col justify-center items-center'>
          {/* <LoginPanel /> */}
          <div className='bg-emerald-50 opacity-75 flex flex-col items-center justify-center rounded-2xl p-8'>
            <div className='my-8'>
              <h1 className='text-2xl'>Welcome Back</h1>
              <p className='text-base'>Please login below</p>
            </div>
            <from className='flex flex-col gap-4'>
              <input className='p-2 rounded border-2 border-emerald-800 bg-white'
                     type="email"
                     placeholder='Email' />
              <input className='p-2 rounded border-2 border-emerald-800 bg-white'
                     type="password"
                     placeholder='Password' />
            </from>
          </div>
        </div>
      </div>
    </main>
  )
}
