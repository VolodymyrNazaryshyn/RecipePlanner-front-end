import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link as NavLink, useLocation } from 'react-router-dom'
import { Pagination, PaginationItem, TextField, Stack, Link } from '@mui/material'
import Constants from "../utilities/Constants"
import RecipeCard from './RecipeCard'

export default function RecipiesByNameOrIngredient(props) {
    const location = useLocation();
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(parseInt(props.history.location.search?.split('=')[1] || 1))
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        axios.get(Constants.API_URL_GET_RECIPIES_BY_NAME_OR_INGREDIENT + `${query}&page=${page}`)
            .then(responce => {
                setTotalPages(parseInt(responce.headers.get("totalpages")))
                setRecipes(responce.data)

                if (totalPages < page) {
                    setPage(1)
                    props.history.replace('/search')
                }
            })
    }, [query, page, totalPages, location, props.history])

    return (
        <>
            <TextField
                fullWidth
                label="Search recipies by name or ingredient"
                placeholder="chicken"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <Stack spacing={2}>
                {!!totalPages && (
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={(_, num) => setPage(num)}
                        showFirstButton
                        showLastButton
                        sx={{ marginY: 3, marginX: 'auto' }}
                        renderItem={
                            (item) => (
                                <PaginationItem
                                    component={NavLink}
                                    to={totalPages < page ? '' : `?page=${item.page}`}
                                    {...item}
                                />
                            )
                        }
                    />
                )}
                {/* {
                    recipes.map(recipe => (
                        <Link key={recipe.id} href={recipe.image}>{recipe.name}</Link>
                    ))
                } */}
                <div className='recipes-gallery'>
                    {recipes
                        ? recipes.map(recipe => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                            />
                        ))
                        : "No Recipes!"}
                </div>
            </Stack>
        </>
    )
}
