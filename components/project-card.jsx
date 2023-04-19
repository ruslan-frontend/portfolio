const { default: Image } = require("next/image")

const ProjectCard = ({ image, title, year, type, description }) => {
    return (
        <div className='project-card'>
                <Image 
                    className='project-image'
                    alt='first'
                    src={image}
                />
                <div className='project-description'>
                    <h4 className='project-title'>{title}</h4>
                    <div className='project-date'>
                        <div className='project-year'>{year}</div>
                        <span className='project-type'>{type}</span>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
    )
}

export default ProjectCard;