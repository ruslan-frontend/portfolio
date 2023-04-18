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
                <BsTelegram 
                    className={styles.img}
                />
                <Image 
                    className={styles.img}
                    src={twitter}
                    alt='twitter'
                />
                <Image
                    className={styles.img}
                    src={instagram}
                    alt='instagram'
                />
                <Image
                    className={styles.img}
                    src={linkedin} 
                    alt='linkedin'
                />
            </div>
            <p className={styles.rights}>Copyright ©2023 All rights reserved</p>
        </footer>
    )
}

export default Footer;