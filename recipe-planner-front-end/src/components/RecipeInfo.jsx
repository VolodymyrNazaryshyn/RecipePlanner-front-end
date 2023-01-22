import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Constants from '../utilities/Constants'
import { convert, parseCalories } from '../utilities/Convert'
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

                    <div className='recipe-full-info-box'>
                        <h3 className="recipe-kindOfMeal">{!!recipe.kindOfMeal && "Kind of meal: " + recipe.kindOfMeal}</h3>
                        {!!recipe.cuisineType && <div className='recipe-cuisine'>
                            <img src={`/img/flags/${recipe.cuisineType}.png`} alt="" />
                            <h3>{recipe.cuisineType + " cuisine"}</h3>
                        </div>}
                        {!!recipe.diet && <h3 className='recipe-diet'>{recipe.diet + " diet"}</h3>}
                    </div>

                    <div className="recipe-ingredients">
                        <div className="ingred-cooking-time-box">
                            <h2 className="ingred-count">Ingredients: {recipe.ingredientCount}</h2>
                            {!!recipe.cookingTime && <span>cooking time: {recipe.cookingTime} min</span>}
                        </div>
                        <div className="ingredients-container">
                            <ul>
                                {
                                    convert(recipe.ingredients).map(item => (
                                        <li key={item.name}><strong>{item.name}</strong>{!!item.value && ` : ${item.value}`}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <h2 className="content-title">Content:</h2>
                    <div className="calories-container">
                        <h4>{parseCalories(recipe).calories}</h4>
                        <h4>carbohydrate: {parseCalories(recipe).carbohydrateContent}</h4>
                        <h4>cholesterol: {parseCalories(recipe).cholesterolContent}</h4>
                        <h4>fat: {parseCalories(recipe).fatContent}</h4>
                        <h4>fiber: {parseCalories(recipe).fiberContent}</h4>
                        <h4>protein: {parseCalories(recipe).proteinContent}</h4>
                        <h4>saturated fat: {parseCalories(recipe).saturatedFatContent}</h4>
                        <h4>sodium: {parseCalories(recipe).sodiumContent}</h4>
                        <h4>sugar: {parseCalories(recipe).sugarContent}</h4>
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
