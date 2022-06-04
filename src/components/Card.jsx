import React from 'react';
import cities from '../data';



export default function Card({cities}) {
  // acá va tu código
  return(
    <div>
      <h1>{cities.name}</h1>
      <p>{cities.min},{cities.max},{cities.img},{cities.onClose}</p>
    </div>
  )
};