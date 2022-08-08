import AlejoVeronCurriculum from '../assets/AlejoVeronCurriculum.pdf'

export default function Navbar() {
    return (

        <>
            <nav class="navbar navbar-expand-md navbar-dark bg-primary" id="navBar">
                <div class="container-fluid"> 
                <button class="navbar-toggler navbar-toggler-right border-0 p-0" type="button" data-toggle="collapse" data-target="#navbar20">
                    <p class="navbar-brand text-white mb-0">
                        <i class="fa d-inline fa-lg fa-stop-circle"></i> Portfolio </p>
                </button>
                    <div class="collapse navbar-collapse justify-content-around" id="navbar20">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item"> <a class="nav-link" href="#home">Home</a></li>
                            <li class="nav-item"> <a class="nav-link" href="#Proyects">Proyects</a></li>
                            <li class="nav-item"> <a class="nav-link" href="#about">About</a></li>
                            <li class="nav-item"> <a class="nav-link" href="#skills">Skills</a></li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item mx-1"> <a class="nav-link" href="https://github.com/AleVeron">
                                <i class="fa fa-github fa-fw fa-lg"></i>
                            </a> </li>
                            <li class="nav-item mx-1"> <a class="nav-link" href={AlejoVeronCurriculum} download>
                                <i class="fa fa-dropbox fa-fw fa-lg"></i>
                            </a> </li>
                            <li class="nav-item mx-1"> <a class="nav-link" href="https://www.linkedin.com/in/alejo-veron-dev/">
                                <i class="fa fa-linkedin fa-fw fa-lg"></i>
                            </a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}