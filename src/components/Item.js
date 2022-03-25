import React from 'react';
import ItemCount from './ItemCount.js';
import "./Card/Card.css";




const Item = ({ title, img, price, modelo, click }) => {

  
    return (
        <div className="card">
        <h1>{title}</h1>
        <img src={img}></img>
        <h2>${price}</h2>
        <h3>Modelo: {modelo}</h3>
        <h4>Compraste: {click}</h4>
        <ItemCount/>
    </div>
    );
  };
  
  export default Item;


  