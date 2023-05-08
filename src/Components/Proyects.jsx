import React, { useEffect, useState } from 'react'
import data from '../data/data.json'
import Aos from 'aos'
import "aos/dist/aos.css"

const Proyects = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])


    const proyects = data.proyects
    return (
        <>
            {/* PROYECTS */}
            {
                !show &&
                <div class="proyects">

                    <div id='Proyects'>
                        <button onClick={() => setShow(!show)}>My Proyects</button>
                    </div>

                </div>
            }

            {
                show ?
                    <div class="container mb-5 ">

                        <div class="row g-3 text-center mt-3">
                            {proyects.map((item, index) => (

                                <div data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" key={index} class="col-lg-4 d-flex justify-content-center">
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
                                                            <a className='linksMain' href={item.linkGithub}>
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
                    : null
            }


        </>


    )
}

export default Proyects