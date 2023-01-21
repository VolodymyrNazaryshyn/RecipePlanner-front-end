import React, { useState } from 'react'
import '../css/UserServiceStyles.css'
import Constants from '../utilities/Constants'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [serverEmailError, setServerEmailError] = useState('')
    const [serverPasswError, setServerPasswError] = useState('')

    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        let formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)

        axios.post(Constants.API_URL_POST_LOGIN, formData)
            .then(response => {
                console.log("userid", response.headers.get("userid"));
                localStorage.setItem('userid', JSON.stringify(response.headers.get("userid")));
                console.log("localStorage", localStorage.getItem('userid'))
                console.log("data", response.data)
                if (response.data === "Ok") {
                    navigate("/")
                }
                else if (response.data === "Credentials invalid! Wrong password!") {
                    setServerPasswError("* " + response.data)
                    setServerEmailError('')
                }
                else if (response.data === "Wrong email!") {
                    setServerEmailError("* " + response.data)
                    setServerPasswError('')
                }
            })
    }

    return (
        <div className='login-container'>
            <div className="login-form">
                <h1 className="form-title">Log in</h1>
                <form onSubmit={handleSubmit}>
                    <div className="main-login-user-info">
                        <div className="login-user-input-box">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                required
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                            />
                            <small>{serverEmailError}</small>
                        </div>
                        <div className="login-user-input-box">
                            <label htmlFor="loginPassword">Password</label>
                            <input type="password"
                                required
                                id="loginPassword"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                            />
                            <small>{serverPasswError}</small>
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
