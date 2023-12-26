import Head from 'next/head'
import { Footer } from '@/src/components/Footer'
import { Main } from '@/src/components/Main'
import styles from '@/src/styles/Home.module.css'
import { Header } from '@/src/components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App_index</title>
      </Head>
      <Header></Header>
      <Main page="index" />
      <Footer />
    </div>
  )
}
