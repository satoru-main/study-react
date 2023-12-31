import Image from 'next/image'
import classes from "./Footer.module.css";
import styles from "./Footer.module.css";
export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Thanks By{' '}
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                    priority
                />
            </a>
        </footer>
    )
}
