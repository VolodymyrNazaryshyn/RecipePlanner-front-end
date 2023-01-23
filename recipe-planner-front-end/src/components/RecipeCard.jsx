import React, { useState } from 'react'
import Modal from '../modal/Modal'
import { convert, parseCalories } from '../utilities/Convert'
import '../css/styles.css'
import { useNavigate } from 'react-router-dom'
import * as BiIcons from 'react-icons/bi'

const RecipeCard = ({ recipe }) => {
    const [modalActive, setModalActive] = useState(false)

    let navigate = useNavigate()

    return (
        <>
            <div className='recipe-card' onClick={() => setModalActive(true)}>
                <img src={recipe.image} alt={recipe.name} />
                <div className='card-body'>
                    <span className='category'>{recipe.kindOfMeal}</span>
                    <h3>{recipe.name}</h3>
                    <h3><BiIcons.BiTimeFive /> {recipe.cookingTime} min</h3>
                    <h4>{recipe.ingredientCount} ingredients</h4>
                    <h4>{!!recipe.cuisineType && recipe.cuisineType + " cuisine"}</h4>
                    <h4>{!!recipe.diet && recipe.diet + " diet"}</h4>
                    <h4>{parseCalories(recipe).calories}</h4>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className='modal-window-container'>
                    <div className="current-recipe">
                        <img src={recipe.image} alt="" />
                        <div className="details">
                            <h2>{recipe.name}</h2>
                            <h4>{recipe.kindOfMeal}</h4>
                        </div>
                        <div className='recipe-info-box'>
                            <h3>Ingredients: {recipe.ingredientCount}</h3>
                            <div className='cuisine-info'>
                                {!!recipe.cuisineType && <img src={`/img/flags/${recipe.cuisineType}.png`} alt="" />}
                                <span>{!!recipe.cuisineType && recipe.cuisineType + " cuisine"}</span>
                            </div>
                        </div>
                        <div className="ingredient-con">
                            <ul>
                                {
                                    convert(recipe.ingredients).map(item => (
                                        <li key={item.name}><strong>{item.name}</strong>{!!item.value && ` : ${item.value}`}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <button className="show-recipe" onClick={() => navigate(`/recipe-info/${recipe.id}`)}>View full recipe</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default RecipeCard
