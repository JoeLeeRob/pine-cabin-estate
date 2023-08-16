import Image from 'next/image'
import styles from './page.module.css'
import TheHeader from './components/TheHeader'

export default function Home() {
  return (
    <main>
      <TheHeader />
      <p>hello world</p>
    </main>
  )
}
