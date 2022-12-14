import data from '../data/data.json'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useState, useEffect } from 'react';
import world from '../assets/world.mp4'
import skills from '../data/skills.json'


export default function Main() {

    const [show, setShow] = useState(true)

    useEffect(() => {
        Aos.init({ duration: 1500 });
        console.log("Bienvenidos!");
    }, [])

    const proyects = data.proyects
    const icons = skills.skills

    return (

        <>


            {/* VIDEO */}
            <video
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}
            >
                <source src={world} type='video/mp4' />
            </video>

            {/* HERO */}
            <div id='home' className='hero container d-flex flex-column justify-content-center align-items-center' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">

                <h1 className='heroTitle text-center'>VERON ALEJO</h1>
                <h2 className='heroSubtitle text-center'>FULL STACK DEVELOPER MERN</h2>
                <div class="icons container-fluid d-flex p-3 justify-content-center align-items-center">
                    <a href="https://github.com/AleVeron" target="_blank" class="icon icon--github">
                        <i class="fa fa-github"></i>
                    </a>
                    <a href="mailto:alejoveron65@gmail.com" class="icon icon--google">
                        <i class="fa fa-google"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/alejo-veron-dev/" target="_blank" class="icon icon--linkedin">
                        <i class="fa fa-linkedin"></i>
                    </a>

                </div>

            </div>

            {/* PROYECTS */}
            <div class="text-center mb-3 proyects mb-5">

                <div id='Proyects'>
                    <button onClick={() => setShow(!show)}>My Proyects</button>
                </div>

            </div>

            {show === false ? null :


                <div class="container mb-5 ">

                    <div class="row g-3 text-center">
                        {proyects.map((item, index) => (

                            <div data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" key={index} class="col-lg-6 d-flex justify-content-center">
                                <div class="card" style={{
                                    backgroundImage: `url("${item.image}")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",

                                }} >


                                    <a className='divMask' target="_blank" href={item.linkDeploy}>
                                        <div class="d-flex justify-content-center align-items-center">

                                            <div class="info info-yellow d-flex col-8 justify-content-between">

                                                <span class="user-icons col-3" style={{
                                                    backgroundImage: `url("${item.technology}")`,
                                                    backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                                                }}>
                                                </span>

                                                <div className='d-flex col-8 justify-content-around'>

                                                    <div class="d-flex align-items-center ">
                                                        <h2 class="name">{item.name}</h2>
                                                    </div>
                                                    <div className='d-flex align-items-center me-2'>
                                                        <a className='linksMain'  href={item.linkGithub}>
                                                            <i class=" fa fa-github fa-fw fa-lg"></i></a>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </a>


                                </div>
                            </div>

                        ))}
                    </div>

                </div>

            }

            {/* ABOUT */}
            <div id='about' className='pb-5'>
                <h1 className='text-center heroSubtitle'>About</h1>
                <p className='text-center container aboutP'>  ??Hola! Soy Alejo Veron y vengo incursionando hace mucho tiempo en el mundo del desarrollo Web y aplicaciones, tanto en el Front-End como en el Back-end. ????
                    Me especializo en el lenguaje de JavaScript, con conocimientos en Mongo, Express, React y NodeJs entre otros. Realize varios proyectos que podr??n ver en mi GitHub ???? y acabo egresar del boootcamp de Mindhub, el cual simula un entorno de trabajo real por mas de 600hs.
                    Gracias al mismo pude adquirir habilidades tanto de trabajo en equipo como s??lidos hard skills bajo la metodolog??a 'learning by doing'.
                    Me encuentro en la b??squeda de mi primera experiencia en el ??rea IT y cuento con la confianza y los conocimientos suficientes para poder desarrollarme eficiente en el mismo.
                    Me encuentro disponible para cualquier oferta o contacto, saludos!
                </p>
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
