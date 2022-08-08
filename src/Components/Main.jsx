import data from '../data/data.json'

export default function Main() {

    console.log(data);
    const proyects = data.proyects

    return (
        <>
            <div class="container mb-5 ">
                <div class="text-center mb-3">

                    <h1 class="text-danger">Our Portfolio</h1>


                </div>


                <div class="row g-5 text-center">

                    {proyects.map((item, index) => (

                        <div key={index} class="col-lg-4 d-flex justify-content-center ">
                            <div class="card" style={{
                                backgroundImage: `url("${item.image}")`,
                                backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                            }} >
                                <img class="img-fluid rounded" />
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

                    ))}
                </div>





            </div>


        </>

    )
}