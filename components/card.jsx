const { default: Image } = require("next/image")
import { useCallback, useEffect, useState } from 'react';
import styles from '../src/styles/Card.module.css'
import Modal from './card-modal';

const ProjectCard = ({ image, title, year, type, description }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);
    
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        }
        
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeModal]);

    return (
        <div className={`${isModalOpen ? `${styles.modal_open}` : `${styles.card}`}`} onClick={handleCardClick}>
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
            {isModalOpen && (
            <div>
                <div className="overlay"/>
                <Modal 
                    closeModal={closeModal}
                    image={image}
                    title={title}
                    year={year}
                    type={type}
                    description={description}
                />
            </div>
            )}
        </div>
    )
}

export default ProjectCard;