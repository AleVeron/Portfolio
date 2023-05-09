import { Link } from 'react-router-dom'
import AlejoVeronCurriculum from '../assets/AlejoVeronCurriculum.pdf'

export default function Navbar() {
    return (

        <>
            <nav className="navbar navbar-expand navbar-dark bg-primary" id="navBar">
                <div className="container-fluid">
                    <div className="navbar-collapse justify-content-around" id="navbar20">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"> <Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"> <Link className="nav-link" to={"/proyects"}>Proyects</Link></li>
                            <li className="nav-item"> <Link className="nav-link" to={"/about"}>About</Link></li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-1"> <a className="nav-link" id='git' target="_blank" href="https://github.com/AleVeron">
                                <i className="fa fa-github fa-fw fa-lg"></i>
                            </a>
                            </li>
                            <li className="nav-item mx-1"> <a className="nav-link" id='cv' target="_blank" href={AlejoVeronCurriculum} download>
                                <i className="fa fa-dropbox fa-fw fa-lg"></i>
                            </a>
                            </li>
                            <li className="nav-item mx-1"> <a className="nav-link" id='linkedin' target="_blank" href="https://www.linkedin.com/in/alejo-veron-dev/">
                                <i className="fa fa-linkedin fa-fw fa-lg"></i>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}