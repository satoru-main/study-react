import Head from 'next/head'
import { Footer } from '@/src/components/Footer'
import { Main } from '@/src/components/Main'
import styles from '@/src/styles/Home.module.css'
import { Header } from '@/src/components/Header'
import { useBgColor } from '../hooks/useBgColor'

export default function About(props) {
  // console.log(props);
  const { doubleCount, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd } = props;
  useBgColor();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App_about </title>
      </Head>
      <Header></Header>
      {isShow ? <h2>{doubleCount}</h2> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}> {isShow ? "非表示" : "表示!"} </button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </ul>

      <Main page="about" />
      <Footer />
    </div>
  )
}
