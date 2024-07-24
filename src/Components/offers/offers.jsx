import React from 'react'
import './offers.css'
import offer_img from '../../assets/exclusive_image.png'
const offers = () => {
  return (
    <>
        <div className="offers">
            <div className="offers_left">
                <p>Exclusive</p>
                <p>offers for you</p>
                <div className='only'>
                    ONLY ON BEST SELLERS PRODUCT
                </div>
                <button className='check_now'>
                    Check Now
                </button>
            </div>
            <div className="offers_right">
                <img src={offer_img} alt="" />
            </div>
        </div>
    </>
  )
}

export default offers