import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link as NavLink, useLocation } from 'react-router-dom'
import { Pagination, PaginationItem, TextField, Stack } from '@mui/material'
import Constants from "../utilities/Constants"
import RecipeCard from './RecipeCard'
import RecipeIndex from './RecipeIndex'

export default function RecipiesByNameOrIngredient(props) {
    const location = useLocation()
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(parseInt(props.history.location.search?.split('=')[1] || 1))
    const [total, setTotal] = useState(0)
    const [alpha, setAlpha] = useState('a')
    const [isAlphaSearch, setAlphaSearch] = useState(true)

    useEffect(() => {
        if (isAlphaSearch) {
            axios.get(Constants.API_URL_GET_RECIPIES_BY_ALPHA + `${alpha}&count=${page}`)
                .then(responce => {
                    setTotal(parseInt(responce.headers.get("totalcount")))
                    setRecipes(responce.data)
                })
        }
    }, [page, alpha])

    useEffect(() => {
        if (!isAlphaSearch) {
            axios.get(Constants.API_URL_GET_RECIPIES_BY_NAME_OR_INGREDIENT + `${query}&page=${page}`)
                .then(responce => {
                    setTotal(parseInt(responce.headers.get("totalpages")))
                    setRecipes(responce.data)
                    if (total < page) {
                        setPage(1)
                        props.history.replace('/search')
                    }
                })
        }
    }, [query, page, total, location, props.history])

    return (
        <>
            <h2 className='search-recipies-title'>Search recipies by name or ingredient</h2>
            <TextField
                sx={{
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "#584700"
                        }
                    }
                }}
                fullWidth
                placeholder="input 'pancakes' or 'onion'"
                value={isAlphaSearch ? "" : query}
                onChange={(event) => { setQuery(event.target.value); setAlphaSearch(false) }}
            />

            <h2 className='search-recipies-title'>Search recipies by alpha</h2>
            <div className='indexContainer'>
                <RecipeIndex letter={alpha} alphaSearch={isAlphaSearch} alphaIndex={(alpha) => {
                    setAlpha(alpha); setPage(1); setAlphaSearch(true)
                }} />
            </div>

            <Stack spacing={2}>
                {!!total && (
                    <Pagination
                        count={total}
                        page={page}
                        onChange={(_, num) => setPage(num)}
                        showFirstButton
                        showLastButton
                        sx={{ marginY: 3, marginX: 'auto' }}
                        renderItem={
                            (item) => (
                                <PaginationItem
                                    component={NavLink}
                                    to={total < page ? '' : `?page=${item.page}`}
                                    {...item}
                                />
                            )
                        }
                    />
                )}

                <div className='recipes-gallery'>
                    {recipes
                        ? recipes.map(recipe => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                            />
                        ))
                        : "No recipies!"}
                </div>
            </Stack>
        </>
    )
}
