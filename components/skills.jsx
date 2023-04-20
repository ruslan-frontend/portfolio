import html from '../public/images/skills/html.svg'
import js from '../public/images/skills/js.svg'
import scss from '../public/images/skills/scss.svg'
import css from '../public/images/skills/css.svg'
import react from '../public/images/skills/react.svg'
import git from '../public/images/skills/git.svg'
import nextjs from '../public/images/skills/nextjs.svg'
import figma from '../public/images/skills/figma.svg'
import ts from '../public/images/skills/ts.svg'
import redux from '../public/images/skills/redux.svg'
import SkillIcon from './skill-icon'
import styles from '../src/styles/Technologies.module.css'


const Technologies = () => {
    return (
        <div>
            <h3 className='block_title'>Skills</h3>
                <div className={styles.layout}>
                    <SkillIcon
                        image={html}
                        name={'HTML'}
                    />
                    <SkillIcon
                        image={js}
                        name={'JS'}
                    />
                    <SkillIcon
                        image={scss}
                        name={'SCSS'}
                    />
                    <SkillIcon
                        image={css}
                        name={'CSS'}
                    />
                    <SkillIcon
                        image={react}
                        name={'ReactJS'}
                    />
                    <SkillIcon
                        image={git}
                        name={'Git'}
                    />
                    <SkillIcon
                        image={nextjs}
                        name={'NextJS'}
                    />
                    <SkillIcon
                        image={figma}
                        name={'Figma'}
                    />
                    <SkillIcon
                        image={ts}
                        name={'TS'}
                    />
                    <SkillIcon
                        image={redux}
                        name={'Redux'}
                    />
                </div>
            <div className='line'></div>
        </div>
    )
}

export default Technologies;