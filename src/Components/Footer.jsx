import { UncontrolledTooltip } from 'reactstrap'
import AlejoVeronCurriculum from '../assets/AlejoVeronCurriculum.pdf'

export default function Footer() {

    console.log("test")

    return (

        <>

            <div class="icons container-fluid d-flex justify-content-center align-items-center">
                <a href="https://github.com/AleVeron" target="_blank" id='github' class="icon icon--github">
                    <i class="fa fa-github"></i>
                </a>
                <UncontrolledTooltip placement="top" target="github">
                    Github
                </UncontrolledTooltip>
                <a href="mailto:alejoveron65@gmail.com" id='mail' class="icon icon--google">
                    <i class="fa fa-google"></i>
                </a>
                <UncontrolledTooltip placement="top" target="mail">
                    Email
                </UncontrolledTooltip>
                <a href={AlejoVeronCurriculum} download id='cvv' class="icon icon--linkedin">
                    <img className='buttonCv' src="http://imgfz.com/i/9Yz4Ar6.png" alt="cv" />
                </a>
                <UncontrolledTooltip placement="top" target="cvv">
                    Curriculum
                </UncontrolledTooltip>
                <a href="https://www.linkedin.com/in/alejo-veron-dev/" target="_blank" id='linek' class="icon icon--linkedin">
                    <i class="fa fa-linkedin"></i>
                </a>
                <UncontrolledTooltip placement="top" target="linek">
                    Linkedin
                </UncontrolledTooltip>
            </div>
            <div className="d-flex flex-column ">
                <h2 className="footerSub text-center pb-4">Created by Veron Alejo</h2>
                <a class="navbar-brand text-white mb-3 text-center" href="#navBar">Top</a>
            </div>

        </>

    )
}
