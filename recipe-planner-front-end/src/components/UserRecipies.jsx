import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Constants from '../utilities/Constants'
import '../css/styles.css'

function UserRecipies() {
    const [recipe, setRecipe] = useState()
    const { id } = useParams()

    let headers = new Headers()

    useEffect(() => {
        headers.append('current-user-id',
            localStorage.getItem('userid').replaceAll('"', ''))

        fetch(Constants.API_URL_GET_USER_RECIPE_BY_ID + id, {
            method: "GET",
            headers: headers
        })
            .then(res => res.json())
            .then(data => {
                setRecipe(data)
                console.log(data)
            })
    }, [id])

    return (
        <>
            {
                (!recipe) ? "" : (<>
                    <img className="recipe-img" src={recipe.image} alt="" />
                    <h1 className="recipe-name">{recipe.name}</h1>

                    <div className='recipe-full-info-box'>
                        <h3 className="recipe-kindOfMeal">{!!recipe.kindOfMeal && "Kind of meal: " + recipe.kindOfMeal}</h3>
                        {!!recipe.cuisineType &&
                            <div className='recipe-cuisine' style={{paddingLeft: "10px"}}>
                                <h3>{recipe.cuisineType + " cuisine"}</h3>
                            </div>
                        }
                        {!!recipe.diet && <h3 className='recipe-diet'>{recipe.diet + " diet"}</h3>}
                    </div>

                    <div className="recipe-ingredients">
                        <div className="ingred-cooking-time-box">
                            <h2 className="ingred-count">Ingredients: {recipe.ingredientCount}</h2>
                            {!!recipe.cookingTime && <span>Cooking time: {recipe.cookingTime} min</span>}
                        </div>
                        <div className="ingredients-container">
                            <ul>
                                {
                                    recipe.ingredients.split(',').map(item => (
                                        <li key={item}><strong>{item}</strong></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <h2 className="content-title">Content:</h2>
                    <div className="calories-container"><strong style={{fontSize: "18px"}}>Calories: {recipe.calories}</strong></div>

                    <div className="recipe-description">
                        <h2>Description</h2>
                        <h4>{recipe.description}</h4>
                    </div>
                </>)
            }
        </>
    )
}

export default UserRecipies
