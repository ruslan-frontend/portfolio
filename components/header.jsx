import Link from "next/link";
import styles from '../src/styles/Header.module.css'
import burger from '../public/images/menu.svg'
import Image from "next/image";

const Header = () => {
    
    return (
        <header className={styles.header}>
            <button className={styles.burger_button}>
                <Image
                    alt='menu'
                    src={burger}
                />
            </button>
            <nav className={styles.nav}>
                <Link className={styles.link} href='/'>Home</Link>
                <Link className={styles.link} href='/experience'>Experience</Link>
                <Link className={styles.link} href='/contacts'>Contacts</Link>
            </nav>
        </header>
    )    
}

export default Header;