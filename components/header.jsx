import Link from "next/link";
import styles from '../src/styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.link} href='/' autofocus>Home</Link>
                <Link className={styles.link} href='/experience'>Experience</Link>
                <Link className={styles.link} href='/contacts'>Contacts</Link>
            </nav>
        </header>
    )    
}

export default Header;