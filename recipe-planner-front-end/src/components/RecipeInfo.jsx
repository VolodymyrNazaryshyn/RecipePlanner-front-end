import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Constants from '../utilities/Constants'
import convert from '../utilities/Convert'
import '../css/styles.css'

const RecipeInfo = () => {
    const [recipe, setRecipe] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(Constants.API_URL_GET_RECIPE_BY_ID + id)
            .then(res => res.json())
            .then(data => {
                setRecipe(data)
            })
    }, [id])

    return (
        <>
            {
                (!recipe) ? "" : (<>
                    <img className="recipe-img" src={recipe.image} alt="" />
                    <h1 className="recipe-name">{recipe.name}</h1>
                    <h2 className="recipe-cuisine">{!!recipe.cuisineType && recipe.cuisineType + " Cuisine"}</h2>
                    <h3 className="recipe-kindOfMeal">{!!recipe.kindOfMeal && recipe.kindOfMeal}</h3>
                    <div className="recipe-ingredients">
                        <h2>Ingredients</h2>
                        <ul>
                            {
                                convert(recipe.ingredients).map(item => (
                                    <li key={item.name}><strong>{item.name}</strong>{!!item.value && ` : ${item.value}`}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="recipe-description">
                        <h2>Description</h2>
                        <h4>{recipe.description}</h4>
                    </div>
                </>)
            }
        </>
    )
}

export default RecipeInfo
