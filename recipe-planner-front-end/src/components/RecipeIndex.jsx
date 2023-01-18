import React, { useEffect } from 'react'

const RecipeIndex = ({ letter, alphaSearch, alphaIndex }) => {
    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    useEffect(() => {
        if (!alphaSearch) document.getElementById(letter.toUpperCase()).checked = false
    }, [alphaSearch])

    return (
        <>
            {
                alpha.map(item => {
                    return (<React.Fragment key={item}>
                        <input
                            type="radio"
                            name="alpha"
                            id={item}
                            className="checkbox-alpha"
                            onClick={() => alphaIndex(item) }
                        />
                        <label className="label-alpha" htmlFor={item}>
                            <h3>{item}</h3>
                        </label>
                    </React.Fragment>)
                })
            }
        </>
    )
}

export default RecipeIndex
