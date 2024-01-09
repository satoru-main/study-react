
import styles from '@/src/styles/Home.module.css'

export const Headline = (props) => {
    return (
        <div>
            <h1 className={styles.title}>{props.page} page</h1>
            <div className={styles.description}>
                <p>
                    アイテムの数は{props.children}個です。
                </p>
                <button onClick={props.handleReduce}>減らす</button>
            </div>
        </div>
    )
}
