import { useState, useEffect } from 'react';
import './css/App.css';
import Constants from "./utilities/Constants";
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);

    let url, response, data, allrecipies;

    if (query === "") {
      url = Constants.API_URL_GET_ALL_RECIPIES;
      response = await fetch(url);
      data = await response.json();
      allrecipies = data;
    }
    else {
      url = Constants.API_URL_GET_RECIPIES_BY_NAME_OR_INGREDIENT + query;
      response = await fetch(url);
      data = await response.json();
      allrecipies = data.recipesPaggination[1];
    }
    
    setRecipes(allrecipies);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <div className='container'>
      <h2 className='text-align-center'>Recipe Planner</h2>
      <SearchBar
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        onChange={event => setQuery(event.target.value)}
        value={query}
      />
      <div className='recipes-gallery'>
        {recipes
          ? recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
          : "No Recipes!"}
      </div>
    </div>
  );
}

export default App;
