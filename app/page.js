import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Explore from './explore/page'
import './globals.css'
import Providers from "./providers";

export default function Home() {
  return (
    <Providers>
    <main className={styles.main}>
      <Explore />
    </main>
    </Providers>
  )
}
