import React, { useState, useEffect } from 'react'
import Constants from '../utilities/Constants'
import RecipeCard from '../components/RecipeCard'
import { useNavigate } from 'react-router-dom'

export default function AllRecipies() {
    const [recipies, setRecipies] = useState([])
    const [arrKindOfMeal] = useState([])
    const [arrCuisine] = useState([])
    const [arrDiet] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isEnd, setIsEnd] = useState(false)
    const [headers] = useState(new Headers())

    let navigate = useNavigate()

    const fetchData = () => {
        try {
            fetch(Constants.API_URL_GET_ALL_RECIPIES + currentPage, {
                method: 'GET',
                headers: headers
            })
                .then(response => response.json())
                .then((data) => {
                    if (data != null) setRecipies(prev => [...prev, ...data])
                    else setRecipies([])
                })
        } catch {
            setIsEnd(true)
        }
    }

    const toggleHeaderStrings = (className, id) => {
        setRecipies([])
        headers.delete(className)
        if (document.getElementById(id)?.checked) {
            if (className === "checkbox-kindmeal") {
                arrKindOfMeal.push(id)
                headers.append(className, arrKindOfMeal.join(','))
            }
            else if (className === "checkbox-cuisine") {
                arrCuisine.push(id)
                headers.append(className, arrCuisine.join(','))
            }
            else if (className === "checkbox-diet") {
                arrDiet.push(id)
                headers.append(className, arrDiet.join(','))
            }
        }
        else {
            if (className === "checkbox-kindmeal") {
                arrKindOfMeal.splice(arrKindOfMeal.indexOf(id), 1)
                headers.append(className, arrKindOfMeal.join(','))
            }
            else if (className === "checkbox-cuisine") {
                arrCuisine.splice(arrCuisine.indexOf(id), 1)
                headers.append(className, arrCuisine.join(','))
            }
            else if (className === "checkbox-diet") {
                arrDiet.splice(arrDiet.indexOf(id), 1)
                headers.append(className, arrDiet.join(','))
            }
        }
        setCurrentPage(1)
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [currentPage])

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollHeight = e.target.documentElement.scrollHeight
            const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
            if (currentHeight + 1 >= scrollHeight && !isEnd)
                setCurrentPage(page => page + 1)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [currentPage, isEnd])

    return (
        <>
            <h1 style={{ textAlign: "center", color: "green", marginBottom: "10px" }}>All Recipies</h1>

            <div className="filters">
                <div className="title-kind-meal">Select the kind of meal</div>
                <input type="checkbox" id="Breakfast" className="checkbox-kindmeal"
                    onClick={() => toggleHeaderStrings('checkbox-kindmeal', 'Breakfast')} />
                <label className="label-kindmeal" htmlFor="Breakfast">Breakfast</label>

                <input type="checkbox" id="Dessert" className="checkbox-kindmeal"
                    onClick={() => toggleHeaderStrings('checkbox-kindmeal', 'Dessert')} />
                <label className="label-kindmeal" htmlFor="Dessert">Dessert</label>

                <input type="checkbox" id="Soup" className="checkbox-kindmeal"
                    onClick={() => toggleHeaderStrings('checkbox-kindmeal', 'Soup')} />
                <label className="label-kindmeal" htmlFor="Soup">Soup</label>

                <input type="checkbox" id="Salad" className="checkbox-kindmeal"
                    onClick={() => toggleHeaderStrings('checkbox-kindmeal', 'Salad')} />
                <label className="label-kindmeal" htmlFor="Salad">Salad</label>

                <input type="checkbox" id="Main Dishes" className="checkbox-kindmeal"
                    onClick={() => toggleHeaderStrings('checkbox-kindmeal', 'Main Dishes')} />
                <label className="label-kindmeal" htmlFor="Main Dishes">Main Dishes</label>

                <input type="checkbox" id="Dinner" className="checkbox-kindmeal"
                    onClick={() => toggleHeaderStrings('checkbox-kindmeal', 'Dinner')} />
                <label className="label-kindmeal" htmlFor="Dinner">Dinner</label>
            </div>
            <div className="filters">
                <div className="title-cuisine">Select the type of cuisine</div>
                <input type="checkbox" id="Ukrainian" className="checkbox-cuisine"
                    onClick={() => toggleHeaderStrings('checkbox-cuisine', 'Ukrainian')} />
                <label className="label-cuisine" htmlFor="Ukrainian">Ukrainian</label>

                <input type="checkbox" id="Greek" className="checkbox-cuisine"
                    onClick={() => toggleHeaderStrings('checkbox-cuisine', 'Greek')} />
                <label className="label-cuisine" htmlFor="Greek">Greek</label>

                <input type="checkbox" id="Chinese" className="checkbox-cuisine"
                    onClick={() => toggleHeaderStrings('checkbox-cuisine', 'Chinese')} />
                <label className="label-cuisine" htmlFor="Chinese">Chinese</label>

                <input type="checkbox" id="Japanese" className="checkbox-cuisine"
                    onClick={() => toggleHeaderStrings('checkbox-cuisine', 'Japanese')} />
                <label className="label-cuisine" htmlFor="Japanese">Japanese</label>

                <input type="checkbox" id="Mexican" className="checkbox-cuisine"
                    onClick={() => toggleHeaderStrings('checkbox-cuisine', 'Mexican')} />
                <label className="label-cuisine" htmlFor="Mexican">Mexican</label>

                <input type="checkbox" id="Italian" className="checkbox-cuisine"
                    onClick={() => toggleHeaderStrings('checkbox-cuisine', 'Italian')} />
                <label className="label-cuisine" htmlFor="Italian">Italian</label>
            </div>
            <div className="filters">
                <div className="title-diet">Select the type of diet</div>
                <input type="checkbox" id="Vegan" className="checkbox-diet"
                    onClick={() => toggleHeaderStrings('checkbox-diet', 'Vegan')} />
                <label className="label-diet" htmlFor="Vegan">Vegan</label>

                <input type="checkbox" id="Vegetarian" className="checkbox-diet"
                    onClick={() => toggleHeaderStrings('checkbox-diet', 'Vegetarian')} />
                <label className="label-diet" htmlFor="Vegetarian">Vegetarian</label>

                <input type="checkbox" id="Diabetic" className="checkbox-diet"
                    onClick={() => toggleHeaderStrings('checkbox-diet', 'Diabetic')} />
                <label className="label-diet" htmlFor="Diabetic">Diabetic</label>

                <input type="checkbox" id="Gluten-Free" className="checkbox-diet"
                    onClick={() => toggleHeaderStrings('checkbox-diet', 'Gluten-Free')} />
                <label className="label-diet" htmlFor="Gluten-Free">Gluten-Free</label>

                <input type="checkbox" id="Low-Fat" className="checkbox-diet"
                    onClick={() => toggleHeaderStrings('checkbox-diet', 'Low-Fat')} />
                <label className="label-diet" htmlFor="Low-Fat">Low-Fat</label>

                <input type="checkbox" id="Low-Calorie" className="checkbox-diet"
                    onClick={() => toggleHeaderStrings('checkbox-diet', 'Low-Calorie')} />
                <label className="label-diet" htmlFor="Low-Calorie">Low-Calorie</label>
            </div>

            <div className='btn-search-recipies-by-name'>
                <button onClick={() => navigate("/search")}>Search recipies by name or ingredient</button>
            </div>

            <div className='recipes-gallery'>
                {
                    (!recipies.length) ? "No recipies!" : (<>
                        {
                            recipies.map(recipe => (
                                <RecipeCard key={recipe.id} recipe={recipe} />
                            ))
                        }
                    </>)
                }
            </div>
        </>
    )
}
