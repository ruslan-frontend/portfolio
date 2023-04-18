import Image from 'next/image'
import avatar from '../../public/images/avatar.jpg'
import styles from '../styles/Home.module.css'


export default function Home() {
	return (
		<div className='home'>
			<div className={styles.about}>
				<h1>Hi, I am John, <br/> Creative Technologist</h1>
				<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
				<button>Download Resume</button>
			</div>
			<div className={styles.layout}>
				<div className={styles.background}>
				</div>
				<Image 
				className={styles.avatar}
				src={avatar}
				alt='avatar'/>
			</div>
		</div>
	)
}
