import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Main } from '@/components/Main'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App_index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Main page="index" />
      <Footer />
    </div>
  )
}
