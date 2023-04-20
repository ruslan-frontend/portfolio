import Image from 'next/image';
import { BsTelegram } from 'react-icons/bs'
import twitter from '../public/images/twitter.svg'
import instagram from '../public/images/instagram.svg'
import linkedin from '../public/images/linkedin.svg'
import styles from '../src/styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.icons}>
                <a href="https://t.me/ruslan_frontend">
                    <BsTelegram 
                        className={styles.icon}
                    />
                </a>
                
                <a href="https://twitter.com/ruslan_frontend">
                    <Image 
                        className={styles.icon}
                        src={twitter}
                        alt='twitter'
                    />
                </a>
                <a href="https://www.instagram.com/ruslan_frontend/">
                    <Image
                        className={styles.icon}
                        src={instagram}
                        alt='instagram'
                    />
                </a>
                <a href="https://www.linkedin.com/in/bulatov-ruslan/">
                    <Image
                        className={styles.icon}
                        src={linkedin} 
                        alt='linkedin'
                    />
                </a>
                
            </div>
            <p className={styles.rights}>Copyright ©2023 All rights reserved</p>
        </footer>
    )
}

export default Footer;