import Head from 'next/head'
import { Footer } from '@/src/components/Footer'
import { Main } from '@/src/components/Main'
import styles from '@/src/styles/Home.module.css'
import { Header } from '@/src/components/Header'
import { useCounter } from '../hooks/useCounter'
import { useInputArray } from '../hooks/useInputArray'
import { useBgLightBlue } from '../hooks/useBgLightBlue'

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App_about </title>
      </Head>
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}> {isShow ? "非表示" : "表示!"} </button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </ul>
      <Header></Header>
      <Main page="about" />
      <Footer />
    </div>
  )
}
