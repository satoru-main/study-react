import styles from '@/src/styles/Home.module.css'
import { Links } from '@/src/components/Links'
import { Headline } from '@/src/components/Headline'
import { useCallback, useState } from 'react';
const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Docs \u2192",
    description: "Find in-depth information about Next.js features and&nbsp;API."
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn→",
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!"
  },
  {
    href: "https://vercel.com/templates",
    title: "Templates→",
    description: "Discover and deploy boilerplate example Next.js&nbsp;projects."
  },
  {
    href: "https://vercel.com/new",
    title: "Deploy→",
    description: "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel."
  }
]
export function Main(props) {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems(prevItems => {
      return prevItems.slice(0, prevItems.length - 1);
    })
  }, [])

  return (
    <>
      <main className={styles.main}>
        <Headline page={props.page} handleReduce={handleReduce}>
          <code className={styles.code}>{items.length}</code>
        </Headline>
        <Links items={items} />
      </main>
    </>
  )
}
