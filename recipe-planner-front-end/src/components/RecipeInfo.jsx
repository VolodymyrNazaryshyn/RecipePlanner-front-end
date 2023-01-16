import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Constants from '../utilities/Constants'

const RecipeInfo = () => {
    const [item, setItem] = useState()
    const { id } = useParams()

    if (id !== "") {
        fetch(Constants.API_URL_GET_RECIPE_BY_ID + id)
            .then(res => res.json())
            .then(data => {
                console.log("data", data)
                setItem(data)
            })
    }

    return (
        <>
            {
                (!item) ? "" : (<>
                    <div className="content">
                        <img src={item.image} alt="" />
                        <div className="inner-content">
                            <h1>{item.name}</h1>
                            <h2>{!!item.cuisineType && item.cuisineType + " Cuisine"}</h2>
                            <h3>{!!item.kindOfMeal && item.kindOfMeal}</h3>
                        </div>
                    </div>
                    <div className="recipe-details">
                        {/* <div className="ingredients">
                            <h2>Ingredients</h2><br />
                            <h4>{item.strIngredient1} : {item.strMeasure1}</h4>
                            <h4>{item.strIngredient2} : {item.strMeasure2}</h4>
                            <h4>{item.strIngredient3} : {item.strMeasure3}</h4>
                            <h4>{item.strIngredient4} : {item.strMeasure4}</h4>
                            <h4>{item.strIngredient5} : {item.strMeasure5}</h4>
                            <h4>{item.strIngredient6} : {item.strMeasure6}</h4>
                            <h4>{item.strIngredient7} : {item.strMeasure7}</h4>
                            <h4>{item.strIngredient8} : {item.strMeasure8}</h4>
                        </div> */}
                        <div className="instructions">
                            <h2>Description</h2><br />
                            <h4>{item.description}</h4>
                        </div>
                    </div>
                </>)
            }
        </>
    )
}

export default RecipeInfo
