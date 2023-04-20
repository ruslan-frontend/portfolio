const { default: Image } = require("next/image")
import styles from '../src/styles/SkillIcon.module.css'

const SkillIcon = ({ image, name }) => {
    return (
        <div className={styles.layout}>
            <Image 
                className={styles.icon_medium}
                alt={image}
                src={image}
            />
            <span>{name}</span>
        </div>
    )
}

export default SkillIcon;