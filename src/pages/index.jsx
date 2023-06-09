import Image from 'next/image'
import avatar from '../../public/images/avatar.jpg'
import styles from '../styles/Home.module.css'
import Skills from '../../components/skills'
import FeaturedWorks from '../../components/featured-works'
import Head from 'next/head'
import Typewriter from "typewriter-effect";


export default function Home() {

	const handleClick = () => {
		const filePath = '/public/bulatov.pdf';
		const downloadLink = document.createElement('a');
		downloadLink.href = filePath;
		downloadLink.download = '/bulatov.pdf';
		downloadLink.click();
	}
	

	return (
		<>
		<Head>
			<title>Portfolio | Home</title>
		</Head>
			<div className={styles.home}>
				<div className={styles.about}>
					<h1 className={styles.title}>Hi, I am Ruslan, <br/> 
					<Typewriter
						onInit={(typewriter)=> { typewriter
						.typeString("Frontend Developer")
						.pauseFor(500)
						.deleteAll()
						.typeString("Frontend Engineer")
						.start();
						}}
					/> </h1>
					<p className={styles.description}>As a frontend developer, I am passionate about creating functional, efficient, and visually appealing user interfaces. With expertise in various technologies and tools, I stay up-to-date with the latest industry trends and best practices. My goal is to deliver high-quality work that exceeds expectations and provides real value to clients and end-users alike.</p>
					<button onClick={handleClick} className={styles.button}>Download Resume</button>
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
			<Skills />
			<FeaturedWorks />
		</>
	)
}
