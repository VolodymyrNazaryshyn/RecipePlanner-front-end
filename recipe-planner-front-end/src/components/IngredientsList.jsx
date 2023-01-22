import React from 'react'
import IngredientForm from './IngredientForm'
import Ingredient from './Ingredient'

function IngredientsList(props) {
    const addIngredient = ingredient => {
        if (!ingredient.text || /^\s*$/.test(ingredient.text)) return

        const newIngredients = [ingredient, ...props.ingredients]

        props.setIngredients(newIngredients)
        console.log(...props.ingredients)
    }

    const updateIngredient = (ingredientId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) return

        props.setIngredients(prev => prev.map(item => (item.id === ingredientId ? newValue : item)))
    }

    const removeIngredient = id => {
        const removedArr = [...props.ingredients].filter(ingredient => ingredient.id !== id)

        props.setIngredients(removedArr)
    }

    const completeIngredient = id => {
        let updatedIngredients = props.ingredients.map(ingredient => {
            if (ingredient.id === id) ingredient.isComplete = !ingredient.isComplete

            return ingredient
        })
        props.setIngredients(updatedIngredients)
    }

    return (
        <>
            <IngredientForm onSubmit={addIngredient} />
            <Ingredient
                ingredients={props.ingredients}
                completeIngredient={completeIngredient}
                removeIngredient={removeIngredient}
                updateIngredient={updateIngredient}
            />
        </>
    )
}

export default IngredientsList