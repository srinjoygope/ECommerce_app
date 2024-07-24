import React from 'react'
import './hero.css'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_img from '../../assets/hero_image.png'

const hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero_left">
                    <h2>New Arrivals Only</h2>
                    <div>
                        <div className="hand_hand_icon">
                            <p>new</p>
                            <img src={hand_icon} alt="" />
                        </div>
                        <p>Collections</p>
                        <p>For everyone</p>
                    </div>
                    <div className="hero_btn">
                        <div className='collection_btn
                        '>Latest Colections</div>
                        <img src={arrow_icon} alt="" />
                    </div>

                </div>
                <div className="hero_right">
                    <img src={hero_img} alt="" />
                </div>
            </div>
        </>
    )
}

export default hero