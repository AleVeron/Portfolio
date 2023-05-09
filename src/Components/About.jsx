import React, { useEffect, useState } from 'react'
import skills from '../data/skills.json'
import { Button } from 'reactstrap'
import Aos from 'aos'
import "aos/dist/aos.css"


const About = () => {
    const [lang, setLang] = useState(true)
    const icons = skills.skills
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
        <>
        
            <div className='container about d-flex flex-column justify-content-center align-items-center'>
                {/* ABOUT */}
                <div id='about'>
                    <h1 className='text-center heroSubtitle'>About</h1>
                    {
                        !lang ? <div className='text-center'>

                            <p className='text-center container aboutP'>  ¡Hola! Soy Alejo Veron desarrollador de aplicaciones Web y mobile, me desempeño tanto en la funcion del front-end como en el back-end 🤓
                                Me especializo en el lenguaje de JavaScript, con conocimientos en MongoDB, Express, React y NodeJs entre otros. Realicé varios proyectos que podrán ver en mi sección de proyectos, egresado del boootcamp de Mindhub, y actual empleado de Intelli-Next.
                                Tanto en el bootcamp como en mi trabajo aplicamos la metodologia SCRUM y utilizo las tecnologias mas actuales del mercado como ReactJs, NodeJs, etc.
                                Entre otros conocimientos cuento con experiencia en React Native y bases de datos como SQL.
                            </p>
                            <Button className='button' onClick={() => setLang(!lang)}>English</Button>
                        </div>
                            :
                            <div className='text-center'>
                                <p className='text-center container aboutP'>  Hello! I'm Alejo Veron and I'm a web and mobile application developer, I work in both front-end and back-end 🤓 I specialize in JavaScript language, with knowledge in MongoDB, Express, React and NodeJs among others. I made several projects that you can see in my projects section, graduate of Mindhub bootcamp, and current employee of Intelli-Next. Both in the bootcamp and in my job we apply the SCRUM methodology and I use the most current technologies on the market such as ReactJs, NodeJs, etc. Among other skills I have experience in React Native and databases like SQL.
                                </p>
                                <Button className='button' onClick={() => setLang(!lang)}>Español</Button>
                            </div>
                    }
                </div>
                {/* SKILLS */}
                <div id='skills' className='d-flex container flex-sm-row flex-wrap align-items-center justify-content-center'>
                    {icons.map(item =>
                        <div key={item.id} className='d-flex flex-column align-items-center justify-content-center' data-aos="fade-right"
                        data-aos-anchor-placement="left-right">
                            <img className='col-4 col-md-6 skills' src={item.url} alt={item.name} />
                            <p className='skillsP p-2'>{item.name}</p>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}

export default About