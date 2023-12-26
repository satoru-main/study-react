import Head from 'next/head'
import { Footer } from '@/src/components/Footer'
import { Main } from '@/src/components/Main'
import styles from '@/src/styles/Home.module.css'
import { Header } from '@/src/components/Header'
import { useCallback, useEffect } from 'react'

// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// }

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("maunt");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("unmaunt");
      document.body.style.backgroundColor = "";
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App_index</title>
      </Head>
      <Header></Header>
      <a
        href='/about'
        onClick={handleClick}
      >
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  )
}
