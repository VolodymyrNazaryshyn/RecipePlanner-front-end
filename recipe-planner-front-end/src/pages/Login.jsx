import React from 'react'
import '../css/UserServiceStyles.css'
import Constants from '../utilities/Constants'

function Login() {
    return (
        <div className='login-container'>
            <div className="login-form">
                <h1 className="form-title">Log in</h1>
                <form action={Constants.API_URL_POST_LOGIN} method='post' encType='multipart/form-data'>
                    <div className="main-login-user-info">
                        <div className="login-user-input-box">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email" />
                        </div>
                        <div className="login-user-input-box">
                            <label htmlFor="loginPassword">Password</label>
                            <input type="password"
                                id="loginPassword"
                                name="password"
                                placeholder="Enter password" />
                        </div>
                    </div>
                    <div className="login-form-submit-btn">
                        <input type="submit" value="Login" />
                    </div>
                </form>
                <div className='register-btn'>
                    <a href="/registration">Don't have an account? Create new</a>
                </div>
            </div>
        </div>
    )
}

export default Login
