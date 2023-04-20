import Link from "next/link";
import styles from '../src/styles/Header.module.css'

const Header = () => {
    
    return (
        <header className={styles.content}>
            <nav className={styles.navbar}>
                <div className={`${styles.navbar_container} ${styles.container}`}>
                    <input type="checkbox" name="" id="" />
                    <div className={styles.hamburger_lines}>
                        <span className={`${styles.line} ${styles.line1}`}></span>
                        <span className={`${styles.line} ${styles.line2}`}></span>
                        <span className={`${styles.line} ${styles.line3}`}></span>
                </div>
                <ul className={styles.menu_items}>
                    <li><Link className={styles.link} href='/'>Home</Link></li>
                    <li><Link className={styles.link} href='/experience'>Experience</Link></li>
                    <li><Link className={styles.link} href='/contacts'>Contacts</Link></li>
                </ul>
            </div>
        </nav>
        </header>
        
    )    
}

export default Header;