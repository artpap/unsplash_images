import React from 'react';
import { useState } from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearchTerm(searchValue);
  };

  return (
    <section className='form-input search-input'>
      <h1 className='title'>unsplash images</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='cat' name='search' />
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
