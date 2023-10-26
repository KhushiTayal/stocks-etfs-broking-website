import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Explore from './explore/page'

//L0YDK0RO21F8MNLR

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/explore">explore</Link>
      <Link href="/product">product</Link>
    </main>
  )
}
