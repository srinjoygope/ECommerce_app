import React from 'react'
import './footer.css'
import Logo from '../../assets/logo.png'
import insta from '../../assets/instagram_icon.png'
import pinte from '../../assets/pintester_icon.png'
import whats from '../../assets/whatsapp_icon.png'


const footer = () => {
    return (
        <>
            <div className="footer">
                <div className="head">
                    <img src={Logo} alt="" />
                    <p>Shopper</p>
                </div>
                <div className="list_1">
                    <ul>
                        <li>Compamy</li>
                        <li>Products</li>
                        <li>Office</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="list_2">
                    <a href=""><img src={insta} alt="" /></a>
                    <a href=""><img src={pinte} alt="" /></a>
                    <a href=""><img src={whats} alt="" /></a>
                </div>
                <div className="copyright">
                    <hr />
                    <p>Copyright @ 2024 - All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default footer