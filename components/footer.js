import Image from 'next/image';
import { BsTelegram } from 'react-icons/bs'
import twitter from '../public/images/twitter.svg'
import instagram from '../public/images/instagram.svg'
import linkedin from '../public/images/linkedin.svg'

const Footer = () => {
    return (
        <footer>
            <div>
                <BsTelegram/>
                <Image
                    src={twitter} 
                />
                <Image
                    src={instagram} 
                />
                <Image
                    src={linkedin} 
                />
            </div>
            <p>Copyright ©2023 All rights reserved</p>
        </footer>
    )
}

export default Footer;