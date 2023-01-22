import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AddRecipe() {
  let navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('userid') === null) {
      navigate("/login")
    }
  }, [])

  return (
    <div className="profile-recipes-controller">
      <h1 className="form-title">My Recipes</h1>
      <div className="profile-recipes-info">

        <div className="profile-recipe-background">
          <div className="profile-recipe-box">
            <label>Banana Smoothie</label>
            <div className="recipe-box-btn">
              <button className="recipe-box-view-btn">View</button>
              <button className="recipe-box-edit-btn">Edit</button>
              <button className="recipe-box-delete-btn">Delete</button>
            </div>
          </div>
        </div>
        <div className="profile-recipe-background">
          <div className="profile-recipe-box">
            <label>Spaghetti</label>
            <div className="recipe-box-btn">
              <button className="recipe-box-view-btn">View</button>
              <button className="recipe-box-edit-btn">Edit</button>
              <button className="recipe-box-delete-btn">Delete</button>
            </div>
          </div>
        </div>
        <div className="profile-recipe-background">
          <div className="profile-recipe-box">
            <label>Split Pea Soup</label>
            <div className="recipe-box-btn">
              <button className="recipe-box-view-btn">View</button>
              <button className="recipe-box-edit-btn">Edit</button>
              <button className="recipe-box-delete-btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <button className="add-recipe-btn">Add recipe</button>
    </div>
  )
}

export default AddRecipe
