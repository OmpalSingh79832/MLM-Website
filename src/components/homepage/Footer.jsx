import React from 'react'
import HappyC from "../../asset/cusomer-retination.png";
import ProjectI from "../../asset/project-complete.png";
import CodingH from "../../asset/coding-hours.png";
import SkillP from "../../asset/skill-profe.png";
import ExperienceI from "../../asset/year-exp.png";
import VerticalImg from "../../asset/versatile-map.png";
const Footer = () => {
    return (
        <>
            <div className="footer-bg-img">
                <div className="container">
                    <div className="row">
                        <div className="col-md-15 count-col">
                            <span className='count-icon'>
                                <img src={HappyC} alt="" className='img-responsive cener-block' />
                            </span>
                            <div className="main-text" style={{ color: "#1fbd78" }}>
                                <span className="numscroller numscroller-big-bottom roller-title-number-1 scrollzip isShown" data-slno="1" data-min="0" data-max="95" data-delay="5" data-increment="15">95</span>
                                <span>%</span>
                            </div>
                            <p className='common-text'>Happy Customer</p>
                        </div>
                        <div className="col-md-15 count-col">
                            <span className='count-icon'>
                                <img src={ProjectI} alt="" className='img-responsive cener-block' />
                            </span>
                            <div className="main-text" style={{ color: "#fe5500" }}>
                                <span className="numscroller numscroller-big-bottom roller-title-number-1 scrollzip isShown" data-slno="1" data-min="0" data-max="95" data-delay="5" data-increment="15">1200</span>
                                <span>+</span>
                            </div>
                            <p className='common-text'>Project Delivered</p>
                        </div>
                        <div className="col-md-15 count-col">
                            <span className='count-icon'>
                                <img src={CodingH} alt="" className='img-responsive cener-block' />
                            </span>
                            <div className="main-text hours-code" style={{ color: "#0780c9" }}>
                                <span className="numscroller numscroller-big-bottom roller-title-number-1 scrollzip isShown" data-slno="1" data-min="0" data-max="95" data-delay="5" data-increment="15">20000</span>
                                <span>+</span>
                            </div>
                            <p className='common-text'>Hours of Coding</p>
                        </div>
                        <div className="col-md-15 count-col">
                            <span className='count-icon'>
                                <img src={SkillP} alt="" className='img-responsive cener-block' />
                            </span>
                            <div className="main-text skill-pro" style={{ color: "#fed700" }}>
                                <span className="numscroller numscroller-big-bottom roller-title-number-1 scrollzip isShown" data-slno="1" data-min="0" data-max="95" data-delay="5" data-increment="15">50</span>
                                <span>+</span>
                            </div>
                            <p className='common-text'>Skilled Professionals</p>
                        </div>
                        <div className="col-md-15 count-col">
                            <span className='count-icon'>
                                <img src={ExperienceI} alt="" className='img-responsive cener-block' />
                            </span>
                            <div className="main-text year-exp" style={{ color: "#fe5500" }}>
                                <span className="numscroller numscroller-big-bottom roller-title-number-1 scrollzip isShown" data-slno="1" data-min="0" data-max="95" data-delay="5" data-increment="15">10</span>
                                <span>+</span>
                            </div>
                            <p className='common-text'>Year of Experience</p>
                        </div>
                    </div>
                </div>

                <div className="love-2-hear">
                    <div className="containers">
                        <div className="row ">
                            <div className="col-sm-7 we-would-like">
                                <h4>We would love to hear  <br />
                                    <strong>about your project</strong>
                                </h4>
                            </div>
                            <div className="col-sm-5 btn-hear-col">
                                <div className="hear-col-arrow"></div>
                                <a href="https://mayawebtech.com/contact-us.html" className='btn btn-coffee' ></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bar mt-5">
                    <div className="container" style={{ color: '#fff' }}>
                        <div className="row footer-syste">
                            <div class="col-xs-12 col-sm-3 col-md-2"><img src={VerticalImg} alt="" className='footer-col1' /></div>
                            <div class="col-xs-12 col-sm-3 col-md-2">
                                <h4>General Links </h4>
                                <nav className="site-nav">
                                    <ul>
                                        <li>
                                            <a href="https://mayawebtech.com/about.html" target='_blank'>About Company</a>
                                        </li>
                                        <li>
                                            <a href="https://mayawebtech.com/about.html" target='_blank'>Web Services</a>
                                        </li>
                                        <li>
                                            <a href="https://mayawebtech.com/about.html" target='_blank'>Coffee With Us</a>
                                        </li>
                                        <li>
                                            <a href="https://mayawebtech.com/about.html" target='_blank'>Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-xs-12 col-sm-3 col-md-3">
                                <h4>Our Services </h4>
                                <nav className="site-nav">
                                    <ul>
                                        <li>
                                            <a href="https://mayawebtech.com/about.html" target='_blank'>Software Development</a>
                                        </li>
                                        <li>
                                            <a href="https://mayawebtech.com/about.html" target='_blank'>Web Design & Development</a>
                                        </li>
                                        <li>
                                            <a href="https://mayawebtech.com/about.html" target='_blank'>E-commerce Solutions</a>
                                        </li>
                                        <li>
                                            <a href="https://mayawebtech.com/about.html" target='_blank'>Mobile App Development</a>
                                        </li>
                                        <li>
                                            <a href="https://mayawebtech.com/about.html" target='_blank'>Multimedia Solution</a>
                                        </li>
                                        <li>
                                            <a href="https://mayawebtech.com/about.html" target='_blank'>Digital Marketing Services</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-xs-12 col-sm-3 col-md-2">
                                <h4>Our Products</h4>
                                <nav class="site-nav ">
                                    <ul>
                                        <li> <a href="/www" target='_blank'>Advosoft</a> </li>
                                        <li> <a href="/www" target='_blank'>Automobile Software </a> </li>
                                        <li> <a href="/www" target='_blank'>Bulk SMS Solutions</a> </li>
                                        <li> <a href="/www" target='_blank'>GST Billing Software</a> </li>
                                        <li> <a href="/www" target='_blank'>MLM Software</a> </li>
                                        <li> <a href="/www" target='_blank'>Sono Soft</a> </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-xs-12 col-sm-3 col-md-3">
                                <h4>Contact us</h4>
                                <nav class="site-nav">
                                    <ul>
                                        <li><a href="tel:+919982133276"><i class="fa fa-phone-square"></i> +91 93159 69524</a></li>
                                        <li><a href="www"><i class="fa fa-envelope  "></i>
                                            info@mayawebtech.com</a></li>
                                    </ul>
                                </nav>
                                <h4>Follow us</h4>
                                <nav class="site-nav">
                                    <ul className='d-flex gap-3 last-stage' >
                                        <li><a href="www" target="_blank"><i class="fa-brands fa-facebook fa-lg" ></i> </a></li>
                                        <li><a href="www" target="_blank"><i class="fa-brands fa-twitter  fa-lg"></i> </a></li>
                                        <li><a href="www" target="_blank"> <i class="fa-brands  fa-linkedin fa-lg"></i></a></li>
                                        <li><a href="www"><i class="fa-brands  fa-youtube fa-lg"></i> </a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bar-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12  ">
                            <p class="copy text-center" style={{ color: "white" }}>&copy; 2014-2023 All Rights Reserved at <span>MayaWebTech.Com</span> </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer