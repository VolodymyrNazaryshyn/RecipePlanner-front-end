import React, { useState } from 'react'
import Modal from '../modal/Modal'
import './styles.css'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    const { calories, cookingTime, diet, ingredientCount, name, kindOfMeal,
        image, ingredients, id, cuisineType, description } = recipe
    const [modalActive, setModalActive] = useState(false)

    let navigate = useNavigate()

    let ingredientsArr = []
    for (let i in ingredients) ingredientsArr.push(i)

    return (
        <>
            <div className='recipe-card' onClick={() => setModalActive(true)}>
                <img src={image} alt={name} />
                <div className='card-body'>
                    <span className='category'>{kindOfMeal}</span>
                    <h3>{name}</h3>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className='modal-window-container'>
                    <div className="current-recipe">
                        <img src={image} alt="" />
                        <div className="details">
                            <h2>{name}</h2>
                            <h4>{kindOfMeal}</h4>
                        </div>
                        <div className="ingredient-con">
                            <ul>
                                {
                                    ingredientsArr.map(item => (
                                        <li key={item}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <button className="show-recipe" onClick={() => navigate(`/recipe-info/${id}`)}>View full recipe</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default RecipeCard
