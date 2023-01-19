import React, { useState } from 'react'
import Constants from '../utilities/Constants'
import { useNavigate } from 'react-router-dom'

function Registration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [birthdayDate, setBirthdayDate] = useState('')
    const [gender, setGender] = useState('')
    const [region, setRegion] = useState('')

    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        let formData = new FormData()
        formData.append('username', name)
        formData.append('email', email)
        formData.append('password1', password)
        formData.append('password2', confirmPassword)
        formData.append('birthdayDate', birthdayDate)
        formData.append('gender', gender)
        formData.append('region', region)

        fetch(Constants.API_URL_POST_REGISTER, {
            body: formData,
            method: "post"
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if (data == "Ok") navigate("/login")
            })
    }

    return (
        <div className="reg-container">
            <div className="reg-form">
                <h1 className="form-title">Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div className="main-reg-user-info">
                        <div className="reg-user-input-box">
                            <label htmlFor="username">Username</label>
                            <input type="text"
                                id="username"
                                name="username"
                                placeholder="Enter Username"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="reg-user-input-box">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="reg-user-input-box">
                            <label htmlFor="password1">Password</label>
                            <input type="password"
                                id="password1"
                                name="password1"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="reg-user-input-box">
                            <label htmlFor="password2">Confirm password</label>
                            <input type="password"
                                id="password2"
                                name="password2"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="reg-user-input-box">
                            <label htmlFor="birthdayDate">Birthday Date</label>
                            <input type="date"
                                id="birthdayDate"
                                name="birthdayDate"
                                placeholder="Enter birthday date"
                                value={birthdayDate}
                                onChange={(e) => setBirthdayDate(e.target.value)}
                            />
                        </div>
                        <div className="gender-detals-box"
                            onChange={(e) => setGender(e.target.value)}>
                            <span className="gender-title">Gender</span>
                            <div className="gender-category">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    id="male" />
                                <label htmlFor="male">Male</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    id="female" />
                                <label htmlFor="female">Female</label>
                            </div>
                        </div>
                        <div className="reg-user-input-box">
                            <label htmlFor="region">Region</label>
                            <select name="region"
                                onChange={(e) => setRegion(e.target.value)}
                                value={region}>
                                <option value="Asia">Asia</option>
                                <option value="Africa">Africa</option>
                                <option value="Europe">Europe</option>
                                <option value="North America">North America</option>
                                <option value="South America">South America</option>
                                <option value="Australia/Oceania">Australia/Oceania</option>
                            </select>
                        </div>
                    </div>
                    <div className="reg-form-submit-btn">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration
