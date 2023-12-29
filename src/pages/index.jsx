import Head from 'next/head'
import { Footer } from '@/src/components/Footer'
import { Main } from '@/src/components/Main'
import styles from '@/src/styles/Home.module.css'
import { Header } from '@/src/components/Header'
import { useEffect, useState } from 'react'

// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// }

export default function Home() {
  const [count, setCount] = useState(1)
  
  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    console.log("maunt");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App_index</title>
      </Head>
      <Header></Header>
      <h1>{count}</h1>
      <button
        href='/about'
        onClick={handleClick}
      >
        ボタン
      </button>
      <Main page="index" />
      <Footer />
    </div>
  )
}
