const { default: Image } = require("next/image")
import styles from '../src/styles/Card.module.css'

const ProjectCard = ({ image, title, year, type, description }) => {
    return (
        <div className={styles.card}>
                <Image 
                    className={styles.image}
                    alt='first'
                    src={image}
                />
                <div className={styles.description}>
                    <h4 className={styles.title}>{title}</h4>
                    <div className={styles.date}>
                        <div className={styles.year}>{year}</div>
                        <span className={styles.type}>{type}</span>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
    )
}

export default ProjectCard;