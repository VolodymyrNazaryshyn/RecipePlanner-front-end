const API_BASE_URL = 'https://recipeplannerwebapi.azurewebsites.net';

const ENDPOINTS = {
    GET_ALL_RECIPIES: 'GetAllRecipies?count=50',
    GET_RECIPIES_BY_NAME_OR_INGREDIENT: 'GetRecipiesByNameOrIngredient?pattern='
};

const Constants = {
    API_URL_GET_ALL_RECIPIES: `${API_BASE_URL}/${ENDPOINTS.GET_ALL_RECIPIES}`,
    API_URL_GET_RECIPIES_BY_NAME_OR_INGREDIENT: `${API_BASE_URL}/${ENDPOINTS.GET_RECIPIES_BY_NAME_OR_INGREDIENT}`
};

export default Constants;
