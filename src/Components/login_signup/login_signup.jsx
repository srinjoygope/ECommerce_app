import React from 'react'
import './login_signup.css'

const login_signup = () => {
    return (
        <>
            <div className="login_signup">
                <div className="login_signup_container">
                    <h1>Sign Up</h1>
                    <input type="text" placeholder='Your name' />
                    <input type="email" placeholder='Your email account' />
                    <input type="text" placeholder='Password' />
                    <button className='continue'>
                        Continue
                    </button>
                    <div className="login">
                        <p>
                            Already have an account ?
                            <div className="orange">Login</div>
                        </p>
                    </div>
                    <div className="terms">
                        <input type="checkbox" />
                        <p>By checking, I agree to your terms and conditions</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login_signup