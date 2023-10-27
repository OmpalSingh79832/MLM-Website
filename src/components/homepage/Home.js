import React, { useEffect } from 'react'

import Aos from 'aos';
const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    useEffect(() => {
        Aos.init({
            duration: 1000,
        })
    }, [])
    return (
        <>
            <div data-aos="fade-down"

                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="home-img text-center">
                    <h3 className='mlm-heading'><span>MLM</span> SOFTWARE</h3>
                    <p className='text-center '>The more you grow the more complex a system will be. Have a system in place and do <br /> not compromise with
                        business growth.</p>
                    <button class="chnnel-btn portfolio-btn" >SEE PORTFOLIO</button>
                </div>
            </div>


        </>
    )
}

export default Home