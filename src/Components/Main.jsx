import data from '../data/data.json'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useState, useEffect } from 'react';
import world from '../assets/world.mp4'
import skills from '../data/skills.json'

export default function Main() {

    const [show, setShow] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    const proyects = data.proyects
    console.log(show);
    const icons = skills.skills
    console.log(icons);

    return (

        <>


            {/* VIDEO */}
            <video 
            autoPlay
            loop
            muted
            style={{
                position: "absolute",
                width:"100%",
                left: "50%",
                top:"50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex:"-1"
            }}
            >
                <source src={world} type='video/mp4'/>
            </video>

            {/* HERO */}
            <div id='home' className='hero container d-flex flex-column justify-content-center align-items-center' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">

                <h1 className='heroTitle'>VERON ALEJO</h1>
                <h2 className='heroSubtitle'>FULL STACK DEVELOPER MERN</h2>
                <div class="icons container-fluid d-flex p-3 justify-content-center align-items-center">
                <a href="https://github.com/AleVeron" class="icon icon--github">
                    <i class="fa fa-github"></i>
                </a>
                <a href="mailto:alejoveron65@gmail.com" class="icon icon--google">
                    <i class="fa fa-google"></i>
                </a>
                <a href="https://www.linkedin.com/in/alejo-veron-dev/" class="icon icon--linkedin">
                    <i class="fa fa-linkedin"></i>
                </a>

            </div>

            </div>

            {/* PROYECTS */}
            <div class="text-center mb-3 proyects">

                <div id='Proyects'>
                    <button onClick={() => setShow(!show)}>My Proyects</button>
                </div>

            </div>

            {show === false ? null :


                <div class="container mb-5 ">

                    <div class="row g-5 text-center">
                        {proyects.map((item, index) => (

                            <div key={index} class="col-lg-6 d-flex justify-content-center">
                                <div class="card" style={{
                                    backgroundImage: `url("${item.image}")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",

                                }} >


                                    <div className='divMask'>
                                        <div class="d-flex justify-content-center align-items-center">

                                            <div class="info info-yellow d-flex col-8 justify-content-between">

                                                <span class="user-icons col-3" style={{
                                                    backgroundImage: `url("${item.technology}")`,
                                                    backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                                                }}>
                                                </span>

                                                <div className='d-flex col-8 justify-content-around'>

                                                    <div class="d-flex flex-column p-1">
                                                        <h2 class="name">{item.name}</h2>
                                                        <a className='linksMain' href={item.linkDeploy}>Link</a>
                                                    </div>
                                                    <div className='d-flex align-items-center me-2'>
                                                        <a className='linksMain' href={item.linkGithub}>
                                                            <i class=" fa fa-github fa-fw fa-lg"></i></a>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>

                        ))}
                    </div>

                </div>

            }

            {/* ABOUT */}
            <div id='about'>
     
            </div>


            {/* SKILLS */}
            <div id='skills' className='d-flex container flex-column flex-md-row'>
                {icons.map(item=>
                    <div key={item.id} className='d-flex flex-column align-items-center'>
                    <img className='col-2 col-md-8' src={item.url} alt={item.name}/>
                    <p className='skillsP p-2'>{item.name}</p>
                    </div>
                )}
            </div>

        </>

    )
}