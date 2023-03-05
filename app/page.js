import Image from 'next/image'

import styles from './page.module.css'
import Header from './components/Header'
import Banner from './components/banner'


export default function Home() {
  return (
    <main className={styles.main}>

      <Header title="endless entertainment all your favourite movies in one place"/>

      <Banner/>

    </main>
  )
}
