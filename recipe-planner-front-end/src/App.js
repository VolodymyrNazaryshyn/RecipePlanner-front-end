import React, { useRef } from 'react'
import { Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from "history"

import RecipiesByNameOrIngredient from "./components/RecipiesByNameOrIngredient"
import AllRecipies from "./components/AllRecipies"
import RecipeInfo from './components/RecipeInfo'
import NotFound from "./components/NotFound"

function App() {
  const { current: history } = useRef(createBrowserHistory({ window }))

  return (
    <Container sx={{ marginTop: 5 }} maxWidth="md">
      <Routes>
        <Route exact path="/" element={<AllRecipies />} />
        <Route exact path="/search" element={<RecipiesByNameOrIngredient history={history} />} />
        <Route exact path="/recipe-info/:id" element={<RecipeInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  )
}

export default App;
