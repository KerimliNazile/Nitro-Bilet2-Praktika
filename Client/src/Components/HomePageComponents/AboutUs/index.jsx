import React from 'react'
import './index.scss'
const AboutUs = () => {
    return (
        <>
            <section id='AboutUs'>
                <div className="AboutUsArea">
                    <div className="AboutUstext">
                        <h1>About Us</h1>
                    </div>
                    <div className="MainAbout">
                        <div className="LeftAbout">
                            <img src="https://preview.colorlib.com/theme/nitro/images/hero_1.jpg.webp" alt="" />
                        </div>
                        <div className="RightAbout">
                            <h3>For the next great business</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</p><br />
                            <ul className='RightIl'>
                                <li>Officia quaerat eaque neque</li>
                                <li>Possimus aut consequuntur incidunt</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipisicing elit</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
