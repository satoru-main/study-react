
import styles from '@/src/styles/Home.module.css'

export function Headline(props) {
    return (
        <div>
            <h1 className={styles.title}>{props.page} page</h1>
            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    {props.children}
                </p>
                <button onClick={props.onClick}>ボタン</button>
            </div>
        </div>
    )
}
