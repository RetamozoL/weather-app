import React from 'react';
import cities from '../data';
import Card from './Card';




export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {
        cities.map((cities) =>
          <Card name={cities.name} min={cities.min}max={cities.max} img={cities.img} onCLose={cities.onCLose} key={index}/> )
      }
    </div>
)
};