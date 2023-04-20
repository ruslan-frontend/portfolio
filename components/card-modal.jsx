import styles from '../src/styles/Modal.module.css'
import ProjectCard from './card';

const Modal = ({ image, title, year, type, description, closeModal }) => {
    return (
        <>
            <div className="overlay" onClick={closeModal}></div>
            <div className={styles.modal}>
                <div>
                    <ProjectCard 
                        image={image}
                        title={title}
                        year={year}
                        type={type}
                        description={description}
                    />
                </div>
            </div>
        </>
    )
}

export default Modal;