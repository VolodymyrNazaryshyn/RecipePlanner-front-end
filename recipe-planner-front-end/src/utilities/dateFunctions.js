export function getParseDateString(date) {
    const year = date.split('.')[2]
    const month = date.split('.')[1]
    const day = date.split('.')[0]
    const dateString = `${year}-${month}-${day}`
    return dateString
}

export function subtractYears(date, years) {
    date.setFullYear(date.getFullYear() - years);
    return getParseDateString(date.toLocaleDateString());
}