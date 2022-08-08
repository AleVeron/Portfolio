import AlejoVeronCurriculum from '../assets/AlejoVeronCurriculum.pdf'

export default function Footer() {
    return (

        <>

            <div class="icons container-fluid d-flex justify-content-center align-items-center">
                <a href="https://github.com/AleVeron" class="icon icon--github">
                    <i class="fa fa-github"></i>
                </a>
                <a href="#" class="icon icon--google">
                    <i class="fa fa-google"></i>
                </a>
                <a href={AlejoVeronCurriculum} download class="icon icon--linkedin">
                    <img  src="https://svgshare.com/i/juX.svg" alt="cv" />
                </a>
                <a href="https://www.linkedin.com/in/alejo-veron-dev/" class="icon icon--linkedin">
                    <i class="fa fa-linkedin"></i>
                </a>
            </div>
            <div className="d-flex flex-column ">
                <h2 className="footerSub text-center pb-4">Created by Veron Alejo</h2>
                <a class="navbar-brand text-white mb-3 text-center" href="#navBar">Top</a>
            </div>

        </>

    )
}