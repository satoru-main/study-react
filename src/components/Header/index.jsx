import Link from 'next/link';
import classes from "./Header.module.css"

const NAV_ITEMS = [
    {href: "/", label:"Index"},
    {href: "/about", label:"About"}
]

export const Header = () => {
    return (
        <header className={classes.header}>
            {NAV_ITEMS.map((item) => {
                return(
                    <Link href={item.href}>
                        <p className={classes.anchor}>{item.label}</p>
                    </Link>
                )
            })}
            {/* <Link href="/">
            <p className={classes.anchor}>Index</p> 
            </Link>
            <Link href="/about">
            <p className={classes.anchor}>about</p> 
            </Link> */}
        </header>
    )
}
