import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from './components/Header'
import Banner from './components/banner'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner/>
      <Header title="endless entertainment"/>

      <Banner/>

    </main>
  )
}
