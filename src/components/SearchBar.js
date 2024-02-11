import React, { useState } from 'react'
import './css/SearchBar.css';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');
    const onChangeEvent = (e) => {
        setTerm(e.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(term)
    }
    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <label>Enter Search term</label>
                <input value={term} onChange={onChangeEvent} placeholder='Enter Search' />
            </form>
        </div>
    )
}

export default SearchBar