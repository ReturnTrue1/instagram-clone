import React, { useRef, useEffect } from 'react'
import '../styles/login.css'
import instagramLogo from '../assets/instagram-logo1.png'
import M from 'materialize-css'
import { Link } from 'react-router-dom'

const Login = () => {

    const element = useRef(null)

    useEffect(() => {
        M.updateTextFields();
    }, [element])
    
    document.title = 'Login • Instagram'

    return (
        <div className="container flex flex-2">
            <div className="row">
                <div className="c-css-login-container">
                    <div className="c-css-logo-container">
                        <img className="c-css-logo" src={instagramLogo} alt="logo" />
                    </div>
                    <div className="flex">
                        <div className="input-field c-css-form-container">
                            <input id="email" type="text" className="validate c-css-form" />
                            <label htmlFor="email" ref={element} >Email</label>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="input-field c-css-form-container">
                            <input id="password" type="password" className="validate c-css-form" />
                            <label htmlFor="password" ref={element} >Password</label>
                        </div>
                    </div>
                    <div className="flex c-css-mg">
                        <div className="c-css-form-container">
                            <button className="btn disabled">Login</button>
                        </div>
                    </div>
                    <div className="flex c-css-mg">
                        <div className="c-css-line"></div>
                        <div className="c-css-line-text">OR</div>
                        <div className="c-css-line"></div>
                    </div>
                    <div className="flex c-css-mg c-css-facebook-container">
                        <div className="c-css-facebook-logo"></div>
                        <div className="c-css-facebook-text">Log in with Facebook</div>
                    </div>
                    <div className="flex c-css-mg c-css-facebook-container">
                        <Link to="/password/reset" className="c-css-forgot-password">Forgot Password?</Link>
                    </div>
                </div>

                <div className="c-css-signup-container">
                    <div className="flex c-css-signup">
                         Don't have an account?
                        <Link to="/accounts/emailsignup/" className="c-css-signup-link">&nbsp;Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login

