import React, { useState } from 'react'

const FilterProducts = () => {
  const electronics = [
    { type: 'Phone', name: 'iPhone 14' },
    { type: 'Laptop', name: 'MacBook Pro' },
    { type: 'Tablet', name: 'iPad Air' },
    { type: 'Smartwatch', name: 'Apple Watch' },
    { type: 'Headphones', name: 'Sony WH-1000XM5' },
    { type: 'Television', name: 'Samsung QLED' },
    { type: 'Camera', name: 'Canon EOS R5' },
    { type: 'Speaker', name: 'Bose SoundLink' },
    { type: 'Monitor', name: 'Dell UltraSharp' },
    { type: 'Gaming Console', name: 'PlayStation 5' }
  ];

  const [query, setQuery] = useState('');

  const filterProducts = electronics.filter((product) => (
    product.name.toLowerCase().includes(query.toLowerCase())
  ))

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  return (
    <>
      <h1>Search Product </h1>
      <label htmlFor="query">Search Product :</label>
      <input type="text" name="" id="query" placeholder='Search Product' onChange={handleChange} value={query} />

      {
        filterProducts.length > 0 ? (
          <ul>
            {filterProducts.map((product, index) => (
              <li key={index}>{product.name}</li>
            ))}
          </ul>
        ) : (
          <p>No Product Found</p>
        )
      }
    </>
  )
}

export default FilterProducts