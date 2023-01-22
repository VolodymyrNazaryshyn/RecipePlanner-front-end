export function convert(obj) {
    return Object.keys(obj).map(key => ({
        name: key,
        value: obj[key]
    }))
}

export function parseCalories(recipe) {
    return JSON.parse(recipe.calories.replaceAll("'", '"'))
}
