import React, { useEffect } from 'react'
import world from '../assets/world.mp4'
import { UncontrolledTooltip } from 'reactstrap';
import Aos from 'aos'
import "aos/dist/aos.css"

const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
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
                    <a href="https://github.com/AleVeron" target="_blank" id="github" class="icon icon--github">
                        <i class="fa fa-github"></i>
                    </a>
                    <UncontrolledTooltip placement="top" target="github">
                        Github
                    </UncontrolledTooltip>
                    <a href="mailto:alejoveron65@gmail.com" id='google' class="icon icon--google">
                        <i class="fa fa-google"></i>
                    </a>
                    <UncontrolledTooltip placement="top" target="google">
                        Email
                    </UncontrolledTooltip>
                    <a href="https://www.linkedin.com/in/alejo-veron-dev/" target="_blank" id='lin' class="icon icon--linkedin">
                        <i class="fa fa-linkedin"></i>
                    </a>
                    <UncontrolledTooltip placement="top" target="lin">
                        Linkedin
                    </UncontrolledTooltip>

                </div>

            </div>
        </>
    )
}

export default Hero