import React, { useState, useEffect, useRef } from 'react'

function IngredientForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    setInput('')
    inputRef.current.focus()
  }

  return (
    <form onSubmit={handleSubmit} className='ingredient-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your ingredient'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='ingredient-input edit'
          />
          <button onClick={handleSubmit} className='ingredient-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add an ingredient'
            value={input}
            onChange={handleChange}
            name='text'
            className='ingredient-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='ingredient-button'>
            Add ingredient
          </button>
        </>
      )}
    </form>
  )
}

export default IngredientForm
