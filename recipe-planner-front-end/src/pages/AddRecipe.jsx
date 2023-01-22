import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import IngredientsList from '../components/IngredientsList'
import Constants from '../utilities/Constants'
import '../css/ingredientsList.css'
import '../css/addRecipe.css'

function AddRecipe() {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [cuisineType, setCuisineType] = useState('')
  const [kindOfMeal, setKindOfMeal] = useState('Breakfast')
  const [diet, setDiet] = useState('')

  let headers = new Headers()
  let navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('userid') === null) {
      navigate("/login")
    }
  }, [])

  function AddRecipe() {
    headers.append('current-user-id', localStorage.getItem('userid').replaceAll('"', ''))

    let ingredientsString = ''
    ingredients.forEach(ingredient => {
      ingredientsString += ingredient.text + ','
    })

    if (ingredientsString.endsWith(',')) ingredientsString = ingredientsString.slice(0, -1)

    let formData = new FormData()
    formData.append('name', name)
    formData.append('ingredients', ingredientsString)
    formData.append('description', description)
    formData.append('image', image)
    formData.append('calories', calories)
    formData.append('cookingTime', cookingTime)
    formData.append('cuisineType', cuisineType)
    formData.append('kindOfMeal', kindOfMeal)
    formData.append('diet', diet)
    formData.append('ingredientCount', ingredients.length)

    fetch(Constants.API_URL_POST_ADD_RECIPE, {
      body: formData,
      method: "post",
      headers: headers
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        if (data === "Ok") {
          navigate("/profile")
        }
        else {
          alert(data)
        }
      })
  }

  return (
    <div className="profile-recipes-controller">
      <h1 className="form-title">Add Recipe</h1>
      <div className="profile-recipes-info">
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div className='add-recipe-input-box'>
                  <input className='name' type="text" placeholder='Input name of recipe'
                    required onChange={(e) => setName(e.target.value)} />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className='ingredients-list'>
                  <IngredientsList ingredients={ingredients} setIngredients={setIngredients} />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className='add-recipe-input-box'>
                  <textarea className='description' placeholder='Input description'
                    required onChange={(e) => setDescription(e.target.value)} />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className='add-recipe-input-box'>
                  <input className='image' type="text" placeholder='Paste URL of recipe image (optional)'
                    onChange={(e) => setImage(e.target.value)} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Calories</td>
              <td><input type="text" onChange={(e) => setCalories(e.target.value)} /></td>
            </tr>
            <tr>
              <td>CookingTime</td>
              <td><input type="text" onChange={(e) => setCookingTime(e.target.value)} /></td>
            </tr>
            <tr>
              <td>CuisineType</td>
              <td><input type="text" onChange={(e) => setCuisineType(e.target.value)} /></td>
            </tr>
            <tr>
              <td>KindOfMeal</td>
              <td>
                <select onChange={(e) => setKindOfMeal(e.target.value)}>
                  <option defaultValue value="Breakfast">Breakfast</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Soup">Soup</option>
                  <option value="Salad">Salad</option>
                  <option value="Main Dishes">Main Dishes</option>
                  <option value="Dinner">Dinner</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Diet</td>
              <td><input type="text" onChange={(e) => setDiet(e.target.value)} /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="add-recipe-btn" onClick={AddRecipe}>Add recipe</button>
    </div>
  )
}

export default AddRecipe
