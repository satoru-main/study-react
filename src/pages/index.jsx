import Head from 'next/head'
import styles from '@/src/styles/Home.module.css'
import { Footer } from '@/src/components/Footer'
import { Main } from '@/src/components/Main'
import { Header } from '@/src/components/Header'
import { useBgColor } from '../hooks/useBgColor'

const Home = (props) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App_index</title>
      </Head>
      <Header></Header>

      {props.isShow ? <h2>{props.count}</h2> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}> {props.isShow ? "非表示" : "表示!"} </button>

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </ul>

      <Main page="index" />
      <Footer />
    </div >
  );
}
export default Home;