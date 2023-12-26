
import styles from '@/styles/Home.module.css'

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

export function Links() {
    return (
        <div className={styles.grid}>
            {ITEMS.map(item => {
                return (
                    <a key={item.href} href={item.href} className={styles.card}>
                        <h2 className={styles.title}>■{item.title}</h2>
                        <p className={styles.description}>{item.description}</p>
                    </a>
                );
            })}


            {/* <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>
                    Learn <span>-&gt;</span>
                </h2>
                <p>
                    Learn about Next.js in an interactive course with&nbsp;quizzes!
                </p>
            </a>

            <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>
                    Templates <span>-&gt;</span>
                </h2>
                <p>
                    Discover and deploy boilerplate example Next.js&nbsp;projects.
                </p>
            </a>

            <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>
                    Deploy <span>-&gt;</span>
                </h2>
                <p>
                    Instantly deploy your Next.js site to a shareable URL
                    with&nbsp;Vercel.
                </p>
            </a> */}
        </div>
    )
}
