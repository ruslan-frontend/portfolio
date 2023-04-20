import Head from "next/head";
import ProjectCard from "../../../components/card";
import first from '../../../public/images/projects/1.svg'
import second from '../../../public/images/projects/2.svg'
import third from '../../../public/images/projects/3.svg'
import fourth from '../../../public/images/projects/4.svg'


const Experience = () => {
    return (
        <div>
            <Head>
			    <title>Portfolio | Work</title>
		    </Head>
            <div>
                <h2 className='subtitle'>Work</h2>
                <ProjectCard 
                    image={first}
                    title={'Digital Health Innovations'}
                    year={'2023'}
                    type={'TeamLead'}
                    description={`Developed and maintained the front-end of a healthcare management platform.
                    Implemented responsive design to ensure compatibility with a wide range of devices.
                    Used React and Redux to build interactive UI components.
                    Improved website performance and page load times by optimizing images and reducing server requests.
                    `}
                />
            </div>
            <div className="line"></div>
                <ProjectCard 
                    image={second}
                    title={'Senior Frontend Developer'}
                    year={'2022'}
                    type={'Senior Frontend Developer'}
                    description={`Collaborated with a team of developers to build a responsive travel booking website.
                    Integrated third-party APIs to display flights, hotels, and car rentals.
                    Developed custom UI components using Angular and TypeScript.
                    Worked closely with designers to ensure the website met the company's branding and style guidelines.
                    `}
                />
            <div className='line'></div>
                <ProjectCard 
                    image={third}
                    title={'36 Days of Malayalam type'}
                    year={'2021'}
                    type={'TeamLead'}
                    description={`Led the development of a new e-commerce platform using Shopify.
                    Developed custom Shopify themes and apps to improve the customer experience.
                    Implemented a responsive design to optimize the website for mobile devices.
                    Worked closely with the marketing team to implement SEO best practices and increase website traffic and conversions.
                    `}
                />
            <div className='line'></div>
                <ProjectCard 
                    image={fourth}
                    title={'Components'}
                    year={'2021'}
                    type={'Middle Frontend Developer'}
                    description={`Built and maintained a learning management system using Moodle.
                    Worked with the instructional design team to develop custom e-learning modules.
                    Developed and integrated custom plugins to extend the functionality of Moodle.
                    Provided technical support to teachers and students using the platform.
                    `}
                />
            <div className='line'></div>
        </div>
    )
}

export default Experience;