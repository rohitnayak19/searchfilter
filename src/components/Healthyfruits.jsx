import React, { useState } from 'react'

const Healthyfruits = () => {
  const fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Fig',
    'Grape',
    'Kiwi',
    'Mango',
    'Orange',
    'Pineapple'
  ];

  const [fruit, setFruit] = useState(fruits);

  // const handleRemove = (index) => {
  //   const updatedFruits = [];
  //   for (let i = 0; i < fruit.length; i++) {
  //     if (i !== index) {
  //       updatedFruits.push(fruit[i])
  //     }
  //   }
  //   setFruit(updatedFruits)
  // }


  const handleRemove = (index) => {
    const updatedFruits = fruit.filter((_, i) => i !== index);
    setFruit(updatedFruits)
  }


  return (
    <>
      <ul>
        {fruit.map((f, i) => (
          <li key={f}>
            <span>{i + 1} </span>{f}
            <button onClick={() => handleRemove(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Healthyfruits