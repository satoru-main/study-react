import Head from 'next/head'
import styles from '@/src/styles/Home.module.css'
import { Footer } from '@/src/components/Footer'
import { Main } from '@/src/components/Main'
import { Header } from '@/src/components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("a");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([1,2,3]);

  const handleClick = (e) => {
    if(count < 10){
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDisplay = (e) => {
    setIsShow((prevIsShow) => !prevIsShow);
  }

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字までにしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

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
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button
        onClick={handleDisplay}>
        {isShow ? "非表示" : "表示!"}
      </button>

      <input type="text" value={text} onChange={handleChange} />
      <ul>
        {array.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div >
  );
}
