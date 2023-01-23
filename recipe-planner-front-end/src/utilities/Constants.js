const API_BASE_URL = 'https://localhost:7295'

const ENDPOINTS = {
    GET_ALL_RECIPIES: 'RecipesFilterController/GetAllRecipies?count=',
    GET_RECIPIES_BY_NAME_OR_INGREDIENT: 'RecipesFilterController/GetRecipiesByNameOrIngredient?pattern=',
    GET_RECIPE_BY_ID: 'RecipesFilterController/GetRecipyById?id=',
    GET_RECIPIES_BY_ALPHA: 'RecipesFilterController/GetRecipiesByAlpha?alpha=',
    POST_REGISTER: 'AuthController/Register',
    POST_LOGIN: 'AuthController/Login',
    GET_CURRENT_USER: 'AuthController/GetCurrentUser',
    PUT_USERNAME: 'AuthController/ChangeUserName?newName=',
    PUT_EMAIL: 'AuthController/ChangeEmail?newEmail=',
    PUT_BIRTHDAY: 'AuthController/ChangeBirthdayDate?newBirthday=',
    PUT_REGION: 'AuthController/ChangeRegion?newRegion=',
    PUT_PASSWORD: 'AuthController/ChangePassword?',
    POST_ADD_RECIPE: 'UserRecipeController/AddNewRecipe',
    GET_USER_RECIPIES: 'UserRecipeController/GetUsersRecipies',
    GET_USER_RECIPE_BY_ID: 'UserRecipeController/GetUsersRecipyById?id=',
    DELETE_USER_RECIPE_BY_ID: 'UserRecipeController/DeleteCurrentRecipe?recipeId='
}

const Constants = {
    API_URL_GET_ALL_RECIPIES: `${API_BASE_URL}/${ENDPOINTS.GET_ALL_RECIPIES}`,
    API_URL_GET_RECIPIES_BY_NAME_OR_INGREDIENT: `${API_BASE_URL}/${ENDPOINTS.GET_RECIPIES_BY_NAME_OR_INGREDIENT}`,
    API_URL_GET_RECIPE_BY_ID: `${API_BASE_URL}/${ENDPOINTS.GET_RECIPE_BY_ID}`,
    API_URL_GET_RECIPIES_BY_ALPHA: `${API_BASE_URL}/${ENDPOINTS.GET_RECIPIES_BY_ALPHA}`,
    API_URL_POST_REGISTER: `${API_BASE_URL}/${ENDPOINTS.POST_REGISTER}`,
    API_URL_POST_LOGIN: `${API_BASE_URL}/${ENDPOINTS.POST_LOGIN}`,
    API_URL_GET_CURRENT_USER: `${API_BASE_URL}/${ENDPOINTS.GET_CURRENT_USER}`,
    API_URL_PUT_USERNAME: `${API_BASE_URL}/${ENDPOINTS.PUT_USERNAME}`,
    API_URL_PUT_EMAIL: `${API_BASE_URL}/${ENDPOINTS.PUT_EMAIL}`,
    API_URL_PUT_BIRTHDAY: `${API_BASE_URL}/${ENDPOINTS.PUT_BIRTHDAY}`,
    API_URL_PUT_REGION: `${API_BASE_URL}/${ENDPOINTS.PUT_REGION}`,
    API_URL_PUT_PASSWORD: `${API_BASE_URL}/${ENDPOINTS.PUT_PASSWORD}`,
    API_URL_POST_ADD_RECIPE: `${API_BASE_URL}/${ENDPOINTS.POST_ADD_RECIPE}`,
    API_URL_GET_USER_RECIPIES: `${API_BASE_URL}/${ENDPOINTS.GET_USER_RECIPIES}`,
    API_URL_GET_USER_RECIPE_BY_ID: `${API_BASE_URL}/${ENDPOINTS.GET_USER_RECIPE_BY_ID}`,
    API_URL_DELETE_USER_RECIPE_BY_ID: `${API_BASE_URL}/${ENDPOINTS.DELETE_USER_RECIPE_BY_ID}`
}

export default Constants
