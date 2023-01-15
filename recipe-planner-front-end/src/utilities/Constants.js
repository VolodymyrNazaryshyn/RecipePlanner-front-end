const API_BASE_URL = 'https://localhost:7295'

const ENDPOINTS = {
    GET_ALL_RECIPIES: 'RecipesFilterController/GetAllRecipies?count=',
    GET_RECIPIES_BY_NAME_OR_INGREDIENT: 'RecipesFilterController/GetRecipiesByNameOrIngredient?pattern='
}

const Constants = {
    API_URL_GET_ALL_RECIPIES: `${API_BASE_URL}/${ENDPOINTS.GET_ALL_RECIPIES}`,
    API_URL_GET_RECIPIES_BY_NAME_OR_INGREDIENT: `${API_BASE_URL}/${ENDPOINTS.GET_RECIPIES_BY_NAME_OR_INGREDIENT}`
}

export default Constants
