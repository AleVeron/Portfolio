import { UncontrolledTooltip } from 'reactstrap'
import AlejoVeronCurriculum from '../assets/AlejoVeronCurriculum.pdf'

export default function Footer() {

    return (

        <div className='d-flex footer flex-column flex-sm-row justify-content-around align-items-center'>

            <div className="icons d-flex">
                <a href="https://github.com/AleVeron" target="_blank" id='github' className="icon icon--github">
                    <i className="fa fa-github"></i>
                </a>
                <UncontrolledTooltip placement="top" target="github">
                    Github
                </UncontrolledTooltip>
                <a href="mailto:alejoveron65@gmail.com" id='mail' className="icon icon--google">
                    <i className="fa fa-google"></i>
                </a>
                <UncontrolledTooltip placement="top" target="mail">
                    Email
                </UncontrolledTooltip>
                <a href={AlejoVeronCurriculum} download id='cvv' className="icon icon--linkedin">
                    <img className='buttonCv' src="http://imgfz.com/i/9Yz4Ar6.png" alt="cv" />
                </a>
                <UncontrolledTooltip placement="top" target="cvv">
                    Curriculum
                </UncontrolledTooltip>
                <a href="https://www.linkedin.com/in/alejo-veron-dev/" target="_blank" id='linek' className="icon icon--linkedin">
                    <i className="fa fa-linkedin"></i>
                </a>
                <UncontrolledTooltip placement="top" target="linek">
                    Linkedin
                </UncontrolledTooltip>
            </div>
            <div className="d-flex flex-column ">
                <h2 className="footerSub text-center">Created by Veron Alejo</h2>
            </div>
        </div>

    )
}
