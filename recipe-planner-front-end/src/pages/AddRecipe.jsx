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
    <div className='add-recipe'>
        <h1>Add Recipe</h1>
    </div>
  )
}

export default AddRecipe
