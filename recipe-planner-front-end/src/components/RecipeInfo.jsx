import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Constants from '../utilities/Constants'
import './styles.css'

const RecipeInfo = () => {
    const [item, setItem] = useState()
    const [ingredients, setIngredients] = useState()
    const { id } = useParams()

    function convert(obj) {
        return Object.keys(obj).map(key => ({
            name: key,
            value: obj[key]
        }));
    }

    useEffect(() => {
        fetch(Constants.API_URL_GET_RECIPE_BY_ID + id)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setIngredients(convert(data.ingredients))
            })
    }, [])

    return (
        <>
            {
                (!item) ? "" : (<>
                    <img className="recipe-img" src={item.image} alt="" />
                    <h1 className="recipe-name">{item.name}</h1>
                    <h2 className="recipe-cuisine">{!!item.cuisineType && item.cuisineType + " Cuisine"}</h2>
                    <h3 className="recipe-kindOfMeal">{!!item.kindOfMeal && item.kindOfMeal}</h3>
                    <div className="recipe-ingredients">
                        <ul>
                            {
                                ingredients.map(item => (
                                    <li key={item.name}>{item.name} : {item.value}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="recipe-description">
                        <h2>Description</h2>
                        <h4>{item.description}</h4>
                    </div>
                </>)
            }
        </>
    )
}

export default RecipeInfo
