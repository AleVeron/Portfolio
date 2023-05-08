import React, { useState } from 'react'
import skills from '../data/skills.json'
import { Button } from 'reactstrap'

const About = () => {
    const [lang, setLang] = useState(false)
    const icons = skills.skills
    return (
        <>
            {/* ABOUT */}
            <div id='about' className='pb-5 mt-5'>
                <h1 className='text-center heroSubtitle'>About</h1>
                {
                    !lang ? <div className='text-center'>

                        <p className='text-center container aboutP'>  ¡Hola! Soy Alejo Veron y soy desarrollador de aplicaciones Web y mobile, me desempeño tanto en la funcion del front-end como en el back-end 🤓
                            Me especializo en el lenguaje de JavaScript, con conocimientos en MongoDB, Express, React y NodeJs entre otros. Realicé varios proyectos que podrán ver mas abajo en mi GitHub 👇 egresado del boootcamp de Mindhub, y actual empleado de Intelli-Next.
                            Tanto en el bootcamp como en mi trabajo aplicamos la metodologia SCRUM y utilizo las tecnologias mas actuales del mercado como ReactJs, NodeJs, etc.
                            Entre otros conocimientos cuento con experiencia en React Native y bases de datos como SQL.
                        </p>
                        <Button color='primary' onClick={() => setLang(!lang)}>🇬🇧</Button>
                    </div>

                        :
                        <div className='text-center'>
                            <p className='text-center container aboutP'>  Hello! I'm Alejo Veron and I'm a web and mobile application developer, I work in both front-end and back-end 🤓 I specialize in JavaScript language, with knowledge in MongoDB, Express, React and NodeJs among others. I made several projects that you can see below in my GitHub 👇 graduate of Mindhub bootcamp, and current employee of Intelli-Next. Both in the bootcamp and in my job we apply the SCRUM methodology and I use the most current technologies on the market such as ReactJs, NodeJs, etc. Among other skills I have experience in React Native and databases like SQL.
                            </p>
                            <Button color='primary' onClick={() => setLang(!lang)}>🇪🇸</Button>
                        </div>

                }

            </div>


            {/* SKILLS */}
            <h1 className='text-center heroSubtitle'>Technologies</h1>
            <div id='skills' className='d-flex container flex-column flex-md-row flex-wrap align-items-center justify-content-center'>

                {icons.map(item =>
                    <div key={item.id} className='d-flex flex-column align-items-center justify-content-center'>
                        <img className='col-4 col-md-6 skills' src={item.url} alt={item.name} />
                        <p className='skillsP p-2'>{item.name}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default About