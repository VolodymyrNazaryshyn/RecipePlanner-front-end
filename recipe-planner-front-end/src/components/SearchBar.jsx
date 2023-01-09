import React from 'react';

const SearchBar = ({
    handleSubmit,
    isLoading,
    onChange,
    value
}) => {
    return (
        <form className='search-bar-form' onSubmit={handleSubmit}>
            <input
                disabled={isLoading}
                onChange={onChange}
                placeholder='Search Recipes'
                type='text'
                value={value}
            />
            <input
                disabled={isLoading || !value}
                type='submit'
                value='Search'
            />
        </form>
    )
};

export default SearchBar;