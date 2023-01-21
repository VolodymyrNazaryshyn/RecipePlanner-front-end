import React, { useState, useEffect } from 'react'
import '../css/profile.css'
import Constants from '../utilities/Constants'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [birthdayDate, setBirthdayDate] = useState('')
  const [gender, setGender] = useState('')
  const [region, setRegion] = useState('')

  let headers = new Headers()
  let navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('userid') === null) {
      navigate("/login")
    }
    else {
      headers.append('current-user-id',
        localStorage.getItem('userid').replaceAll('"', ''))

      fetch(Constants.API_URL_GET_CURRENT_USER, {
        method: 'GET',
        headers: headers
      })
        .then(response => response.json())
        .then((data) => {
          if (data.email === null) {
            navigate("/login")
          }
          else {
            setName(data.userName)
            setEmail(data.email)
            setBirthdayDate(data.birthdayDate.substring(0, 10))
            setGender(data.gender)
            setRegion(data.region)
          }
        })
    }
  }, [])

  return (
    <>
      <div className="profile-controller">
        <div className="profile-info-controller">
          <h1 className="form-title">My Profile</h1>
          <div className="profile-main-info">
            <table className="profile-main-table">
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>{name}</td>
                  <td><button>Edit</button></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{email}</td>
                  <td><button>Edit</button></td>
                </tr>
                <tr>
                  <td>Bitrhday date</td>
                  <td>{birthdayDate}</td>
                  <td><button>Edit</button></td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{gender}</td>
                </tr>
                <tr>
                  <td>Region</td>
                  <td>{region}</td>
                  <td><button>Edit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="profile-pass-controller">
          <div className="profile-pass-info">
            <div className="profile-pass-box">
              <label>Old password</label>
              <input type="password" />
            </div>
            <div className="profile-pass-box">
              <label>New password</label>
              <input type="password" />
            </div>
            <div className="profile-pass-box">
              <label>Confirm new password</label>
              <input type="password" />
            </div>
          </div>
          <button className="change-pass-btn">Change password</button>
        </div>
      </div>

      <div className="profile-recipes-controller">
        <h1 className="form-title">My Recipes</h1>
        <div className="profile-recipes-info">

          <div className="profile-recipe-background">
            <div className="profile-recipe-box">
              <label>Banana Smoothie</label>
              <div className="recipe-box-btn">
                <button className="recipe-box-view-btn">view</button>
                <button className="recipe-box-edit-btn">edit</button>
                <button className="recipe-box-delete-btn">delete</button>
              </div>
            </div>
          </div>
          <div className="profile-recipe-background">
            <div className="profile-recipe-box">
              <label>Spaghetti</label>
              <div className="recipe-box-btn">
                <button className="recipe-box-view-btn">view</button>
                <button className="recipe-box-edit-btn">edit</button>
                <button className="recipe-box-delete-btn">delete</button>
              </div>
            </div>
          </div>
          <div className="profile-recipe-background">
            <div className="profile-recipe-box">
              <label>Split Pea Soup</label>
              <div className="recipe-box-btn">
                <button className="recipe-box-view-btn">view</button>
                <button className="recipe-box-edit-btn">edit</button>
                <button className="recipe-box-delete-btn">delete</button>
              </div>
            </div>
          </div>
        </div>
        <button className="add-recipe-btn">Add</button>
      </div>
    </>
  )
}

export default Profile