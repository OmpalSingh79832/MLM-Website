import { useEffect } from 'react'
import SoftwareImg from "../../asset/soft-development-img.png";
import Home from '../homepage/Home';
const SoftwareDev = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>


            <Home />
            <div className="container">
                <div className='row'>

                    <div className="col-md-5 col-lg-5 sw-content">
                        <img src={SoftwareImg} className="img-responsive center-block" alt="eCommerce Software Development" />
                    </div>
                    <div className="col-md-7 col-lg-7 sw-content mt-5 ">
                        <div className="content" style={{ minHeight: 'auto !important' }}>
                            <h2>Software Development Company</h2>
                            <p>We provide <a href="www">ecommerce
                                solutions</a> and turnkey software for various kind of businesses operating worldwide. Our dynamic and
                                interactive software are crafted in keeping with the unique requirements of your business.</p>
                            <p> Our aim is to assist you in the performance of critical tasks with precision thereby increasing your
                                productivity and saving precious time.</p>
                            <p> This is vital for organizations/companies that work on a large scale because at the end of the day
                                time management translates into efficiency.</p>

                        </div>
                    </div>
                </div>




                <section className="contents ">
                    <div className="content-bar content-section-bar soft-devep" style={{ padding: '45px 0 35px' }}>
                        <div className="container ">
                            <div className="serve-head">
                                <h2 className="text-left">Take a look at some of <span>our most popular software</span></h2>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-xs-6 devicefull ">
                                    <article className="wow zoomIn green-box" data-wow-offset={50} data-wow-duration="0.5s" data-wow-delay="0.25s">
                                        <h3> RetailPro  <br /><span>Retail Management System </span> </h3>
                                        {/**/}
                                    </article>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6 devicefull">
                                    <article className="wow zoomIn orange-box" data-wow-offset={50} data-wow-duration="0.5s" data-wow-delay="0.25s" style={{ visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.25s', animationName: 'zoomIn' }}>
                                        <h3> Automobile <span>Automobile parts Inventory management system</span> </h3>
                                        {/**/}
                                    </article>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6 devicefull">
                                    <article className="wow zoomIn red-box" data-wow-offset={50} data-wow-duration="0.5s" data-wow-delay="0.25s">
                                        <h3> BricksPro <br /><span>Bricks Industry Management system with Accounting</span> </h3>
                                        {/**/}
                                    </article>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6 devicefull">
                                    <article className="wow zoomIn yellow-box" data-wow-offset={50} data-wow-duration="0.5s" data-wow-delay="0.25s">
                                        <h3> Advosoft <br /> <span>Tablet software for Advocates with ease of maintenance</span> </h3>
                                        {/**/}
                                    </article>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6 devicefull">
                                    <article className="wow zoomIn blue-box" data-wow-offset={50} data-wow-duration="0.5s" data-wow-delay="0.25s">
                                        <h3> Explosive pro <br /><span>An Complete software solution for Explosive industry</span> </h3>
                                        {/**/}
                                    </article>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6 devicefull">
                                    <article className="wow zoomIn pink-box" data-wow-offset={50} data-wow-duration="0.5s" data-wow-delay="0.25s">
                                        <h3> Excise Billing Solution Complete </h3>
                                        {/**/}
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>



        </>
    )
}

export default SoftwareDev