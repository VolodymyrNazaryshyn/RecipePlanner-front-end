import React, { useState, useEffect } from 'react'
import '../css/profile.css'
import Constants from '../utilities/Constants'
import { useNavigate } from 'react-router-dom'
import { subtractYears, getParseDateString } from '../utilities/dateFunctions'
import * as BiIcons from 'react-icons/bi'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'

function Profile() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [birthdayDate, setBirthdayDate] = useState('')
  const [gender, setGender] = useState('')
  const [region, setRegion] = useState('')
  const [isNameEditable, setIsNameEditable] = useState(false)
  const [isEmailEditable, setIsEmailEditable] = useState(false)
  const [isBirthdayDateEditable, setIsBirthdayDateEditable] = useState(false)
  const [isRegionEditable, setIsRegionEditable] = useState(false)

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isOldPassServerErr, setIsOldPassServerErr] = useState(false)
  const [isNewPassServerErr, setIsNewPassServerErr] = useState(false)
  const [isConfirmPassServerErr, setIsConfirmPassServerErr] = useState(false)
  const [oldPassErrMsg, setOldPassErrMsg] = useState('')
  const [newPassErrMsg, setNewPassErrMsg] = useState('')
  const [confirmPassErrMsg, setConfirmPassErrMsg] = useState('')

  const [userRecipes, setUserRecipes] = useState([])

  let headers = new Headers()
  let navigate = useNavigate()

  function GetUserRecipies() {
    fetch(Constants.API_URL_GET_USER_RECIPIES, {
      method: 'GET',
      headers: headers
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        setUserRecipes(data)
      })
  }

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
            setBirthdayDate(data.birthdayDate?.substring(0, 10))
            setGender(data.gender)
            setRegion(data.region)
          }
        })

      GetUserRecipies()
    }
  }, [])

  function EditName() {
    if (!isNameEditable) {
      setIsNameEditable(true)
    }
    else {
      headers.append('current-user-id', localStorage.getItem('userid').replaceAll('"', ''))

      fetch(Constants.API_URL_PUT_USERNAME + name, {
        method: 'PUT',
        headers: headers
      })
        .then(response => response.json())
        .then((data) => {
          (data === "Ok") ? setIsNameEditable(false) : alert("Error: " + data)
        })
    }
  }

  function EditEmail() {
    if (!isEmailEditable) {
      setIsEmailEditable(true)
    }
    else {
      headers.append('current-user-id', localStorage.getItem('userid').replaceAll('"', ''))

      fetch(Constants.API_URL_PUT_EMAIL + email, {
        method: 'PUT',
        headers: headers
      })
        .then(response => response.json())
        .then((data) => {
          (data === "Ok") ? setIsEmailEditable(false) : alert("Error: " + data)
        })
    }
  }

  function EditBirthdayDate() {
    if (!isBirthdayDateEditable) {
      setIsBirthdayDateEditable(true)
    }
    else {
      headers.append('current-user-id', localStorage.getItem('userid').replaceAll('"', ''))

      fetch(Constants.API_URL_PUT_BIRTHDAY + birthdayDate, {
        method: 'PUT',
        headers: headers
      })
        .then(response => response.json())
        .then((data) => {
          (data === "Ok") ? setIsBirthdayDateEditable(false) : alert("Error: " + data)
        })
    }
  }

  function EditRegion() {
    if (!isRegionEditable) {
      setIsRegionEditable(true)
    }
    else {
      headers.append('current-user-id', localStorage.getItem('userid').replaceAll('"', ''))

      fetch(Constants.API_URL_PUT_REGION + region, {
        method: 'PUT',
        headers: headers
      })
        .then(response => response.json())
        .then((data) => {
          (data === "Ok") ? setIsRegionEditable(false) : alert("Error: " + data)
        })
    }
  }

  function IsEmptyOldPassword() {
    return oldPassword === "" || oldPassword.length < 5
  }

  function IsEmptyNewPassword() {
    return newPassword === "" || newPassword.length < 5
  }

  function IsEmptyConfirmPassword() {
    return confirmPassword === "" || confirmPassword.length < 5
  }

  function ChangePassword() {
    headers.append('current-user-id',
      localStorage.getItem('userid').replaceAll('"', ''))

    if (IsEmptyOldPassword())
      setOldPassErrMsg("* Password cant be empty or less then 5 symbols!")

    if (IsEmptyNewPassword())
      setNewPassErrMsg("* Password cant be empty or less then 5 symbols!")

    if (IsEmptyConfirmPassword())
      setConfirmPassErrMsg("* Password cant be empty or less then 5 symbols!")

    if (!IsEmptyOldPassword() && !IsEmptyNewPassword() && !IsEmptyConfirmPassword()) {
      fetch(Constants.API_URL_PUT_PASSWORD + `oldPassword=${oldPassword}&newPassword1=${newPassword}&newPassword2=${confirmPassword}`, {
        method: 'PUT',
        headers: headers
      })
        .then(response => response.json())
        .then((data) => {
          if (data === "Ok") {
            alert("Your password was successfully changed!\nYou need to log in again.")
            localStorage.removeItem('userid')
            navigate("/login")
          }
          else {
            if (data === "You wrote a wrong password!") {
              setIsOldPassServerErr(true)
              setOldPassErrMsg("* You wrote a wrong old password!")
              setIsNewPassServerErr(false)
              setIsConfirmPassServerErr(false)
              setNewPassErrMsg('')
              setConfirmPassErrMsg('')
            }
            else if (data === "Passwords must be similar!") {
              setIsNewPassServerErr(true)
              setIsConfirmPassServerErr(true)
              setNewPassErrMsg("* Passwords must be similar!")
              setConfirmPassErrMsg("* Passwords must be similar!")
              setIsOldPassServerErr(false)
              setOldPassErrMsg('')
            }
            else if (data === "Old and new password cant be similar!") {
              setIsOldPassServerErr(true)
              setIsNewPassServerErr(true)
              setOldPassErrMsg("* Old and new password cant be similar!")
              setNewPassErrMsg("* Old and new password cant be similar!")
              setIsConfirmPassServerErr(false)
              setConfirmPassErrMsg('')
            }
          }
        })
    }
  }

  function DeleteRecipe(id) {
    headers.append('current-user-id',
      localStorage.getItem('userid').replaceAll('"', ''))

    fetch(Constants.API_URL_DELETE_USER_RECIPE_BY_ID + id, {
      method: "DELETE",
      headers: headers
    })
      .then(res => res.json())
      .then(data => {
        (data === "Ok") ? GetUserRecipies() : console.log(data)
      })
  }

  return (
    <>
      <div className="profile-controller">
        <div className="profile-info-controller">
          <h1 className="form-title">My Profile</h1>
          <div className="profile-main-info">
            <table className="profile-main-table">
              <tbody>
                <tr>
                  <td>Username:</td>
                  <td>
                    {isNameEditable
                      ? <input className="name-input" type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
                      : <span>{name}</span>}
                  </td>
                  <td><button onClick={EditName}>{isNameEditable ? <BiIcons.BiSave /> : <BiIcons.BiEditAlt />}</button></td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    {isEmailEditable
                      ? <input className="email-input" type="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                      : <span>{email}</span>}
                  </td>
                  <td><button onClick={EditEmail}>{isEmailEditable ? <BiIcons.BiSave /> : <BiIcons.BiEditAlt />}</button></td>
                </tr>
                <tr>
                  <td>Bitrhday date:</td>
                  <td>
                    {isBirthdayDateEditable
                      ? <input className="date-input" type="date" defaultValue={birthdayDate}
                        onChange={(e) => setBirthdayDate(e.target.value)}
                        min={subtractYears(new Date(), 100)}
                        max={getParseDateString(new Date().toLocaleDateString())} />
                      : <span>{birthdayDate}</span>}
                  </td>
                  <td><button onClick={EditBirthdayDate}>{isBirthdayDateEditable ? <BiIcons.BiSave /> : <BiIcons.BiEditAlt />}</button></td>
                </tr>
                <tr>
                  <td>Gender:</td>
                  <td><span>{gender}</span></td>
                </tr>
                <tr>
                  <td>Region:</td>
                  <td>
                    {isRegionEditable
                      ? <select className="region-select" name="region"
                        onChange={(e) => setRegion(e.target.value)}
                        value={region}>
                        <option disabled defaultValue>Choose region</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europe</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Australia/Oceania">Australia/Oceania</option>
                      </select>
                      : <span>{region}</span>}
                  </td>
                  <td><button onClick={EditRegion}>{isRegionEditable ? <BiIcons.BiSave /> : <BiIcons.BiEditAlt />}</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="profile-pass-controller">
          <div className="profile-pass-info">
            <div className="profile-pass-box">
              <label>Old password</label>
              <input type="password" onChange={(e) => setOldPassword(e.target.value)}
                style={isOldPassServerErr ? { border: "2px solid red" } : {}} />
              <small>{(IsEmptyOldPassword() || isOldPassServerErr) ? oldPassErrMsg : ''}</small>
            </div>
            <div className="profile-pass-box">
              <label>New password</label>
              <input type="password" onChange={(e) => setNewPassword(e.target.value)}
                style={isNewPassServerErr ? { border: "2px solid red" } : {}} />
              <small>{(IsEmptyNewPassword() || isNewPassServerErr) ? newPassErrMsg : ''}</small>
            </div>
            <div className="profile-pass-box">
              <label>Confirm new password</label>
              <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}
                style={isConfirmPassServerErr ? { border: "2px solid red" } : {}} />
              <small>{(IsEmptyConfirmPassword() || isConfirmPassServerErr) ? confirmPassErrMsg : ''}</small>
            </div>
          </div>
          <button className="change-pass-btn" onClick={ChangePassword}>Change password</button>
        </div>
      </div>
      <div className="profile-recipes-controller">
        <h1 className="form-title">My Recipes</h1>
        <div className="profile-recipes-info">
          {
            (!userRecipes.length) ? <h3 className="no-recipies-title">No recipies!</h3> : (<>
              {
                userRecipes.map(recipe => (
                  <div className="profile-recipe-background" key={recipe.id}>
                    <div className="profile-recipe-box">
                      <label>{recipe.name}</label>
                      <div className="recipe-box-btn">
                        <button className="recipe-box-view-btn" onClick={() => navigate(`/user-recipes/${recipe.id}`)}><FaIcons.FaEye /></button>
                        <button className="recipe-box-edit-btn" onClick={() => navigate(`/edit-recipe/${recipe.id}`)}><BiIcons.BiEditAlt /></button>
                        <button className="recipe-box-delete-btn" onClick={() => DeleteRecipe(recipe.id)}><RiIcons.RiDeleteBin6Line /></button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </>)
          }
        </div>
        <button className="add-recipe-btn" onClick={() => navigate("/add-recipe")}>Add recipe <MdIcons.MdOutlinePostAdd /></button>
      </div>
    </>
  )
}

export default Profile