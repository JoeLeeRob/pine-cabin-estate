import Image from 'next/image'
import styles from './page.module.css'
import LoginPanel from './components/TheLoginPanel'

export default function Home() {
  return (
    <main className='container mx-auto'>
      <p>hello world</p>
      <LoginPanel />
    </main>
  )
}
