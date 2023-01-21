function convert(obj) {
    return Object.keys(obj).map(key => ({
        name: key,
        value: obj[key]
    }))
}

export default convert
