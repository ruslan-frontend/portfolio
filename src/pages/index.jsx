import Image from 'next/image'
import avatar from '../../public/images/avatar.jpg'
import styles from '../styles/Home.module.css'
import Technologies from '../../components/technologies'
import FeaturedWorks from '../../components/featured-works'


export default function Home() {
	return (
		<>
			<div className='home'>
				<div className={styles.about}>
					<h1>Hi, I am Ruslan, <br/> Frontend Developer</h1>
					<p>As a frontend developer, I am passionate about creating functional, efficient, and visually appealing user interfaces. With expertise in various technologies and tools, I stay up-to-date with the latest industry trends and best practices. My goal is to deliver high-quality work that exceeds expectations and provides real value to clients and end-users alike.</p>
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
			<div className='line'></div>
			<Technologies />
			<FeaturedWorks />
		</>
	)
}
