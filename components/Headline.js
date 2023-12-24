
import styles from '@/styles/Home.module.css'

export default function Headline(props) {
    console.log(props.title);
    return (
        <div>
            <h1 className={styles.title}>{props.page} page</h1>
            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>pages/{props.page}.js</code>
                </p>
            </div>
        </div>
    )
}
