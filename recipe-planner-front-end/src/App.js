import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from "history"
import Home from "./pages/Home"
import AllRecipies from "./pages/AllRecipies"
import RecipiesByNameOrIngredient from "./pages/RecipiesByNameOrIngredient"
import Profile from './pages/Profile'
import AddRecipe from './pages/AddRecipe'
import Logout from './pages/Logout'
import NotFound from "./pages/NotFound"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import RecipeInfo from './components/RecipeInfo'
import UserRecipies from './components/UserRecipies'

function App() {
  const { current: history } = useRef(createBrowserHistory({ window }))

  return (
    <BrowserRouter>
      <Navbar />
      <Container sx={{ marginTop: 5 }} maxWidth="md">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/recipe-filter" element={<AllRecipies />} />
          <Route path="/search" element={<RecipiesByNameOrIngredient history={history} />} />
          <Route path="/recipe-info/:id" element={<RecipeInfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/user-recipes/:id" element={<UserRecipies />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;
