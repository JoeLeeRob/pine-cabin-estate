import Image from 'next/image'
import styles from './page.module.css'
import NavHeader from './components/NavHeader'

export default function Home() {
  return (
    <main>
      <NavHeader />
      <p>hello world</p>
    </main>
  )
}
