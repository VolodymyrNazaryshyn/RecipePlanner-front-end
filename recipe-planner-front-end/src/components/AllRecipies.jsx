import React, { useState, useEffect } from 'react'
import Constants from '../utilities/Constants'
import RecipeCard from './RecipeCard'

export default function AllRecipies() {
    const [recipies, setRecipies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isEnd, setIsEnd] = useState(false)

    useEffect(() => {
        const fetchData = () => {
            try {
                fetch(Constants.API_URL_GET_ALL_RECIPIES + currentPage, {
                    method: 'GET',
                    headers: headers
                })
                    .then(response => response.json())
                    .then((data) => {
                        setRecipies(prev => [...prev, ...data])
                        console.log(`current page: ${currentPage}`, data)
                    })
            } catch {
                setIsEnd(true)
            }
        }
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
            <h1 style={{ textAlign: "center", color: "green" }}>All Recipies</h1>
            <div className='recipes-gallery'>
                {
                    recipies.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))
                }
            </div>
        </>
    )
}
