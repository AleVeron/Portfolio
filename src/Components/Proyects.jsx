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
        <div className="container pb-2">
            <div className="row g-3 text-center mt-3">
                {proyects.map((item, index) => (

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" key={index} className="col-lg-4 d-flex justify-content-center">
                        <div className="card" style={{
                            backgroundImage: `url("${item.image}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",

                        }} >


                            <a className='divMask' target="_blank" href={item.linkDeploy}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="info info-yellow d-flex col-8 justify-content-between">
                                        <span className="user-icons col-3" style={{
                                            backgroundImage: `url("${item.technology}")`,
                                            backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                                        }}>
                                        </span>
                                        <div className='d-flex col-8 justify-content-around'>
                                            <div className="d-flex align-items-center ">
                                                <h2 className="name">{item.name}</h2>
                                            </div>
                                            <div className='d-flex align-items-center me-2'>
                                                <a className='linksMain' href={item.linkGithub}>
                                                    <i className=" fa fa-github fa-fw fa-lg"></i></a>
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
    )
}

export default Proyects