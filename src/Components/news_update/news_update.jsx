import React from 'react'
import './news_update.css'

const news_update = () => {
    return (
        <>
            <div className="news_update">
                <h1>Get Exclusive Offers On Your Em@il</h1>
                <p>Subscribe to our newletter and stay updated</p>
                <div className="email_input">
                    <input type="email" placeholder='Enter yout email id'/>
                    <button>
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    )
}

export default news_update