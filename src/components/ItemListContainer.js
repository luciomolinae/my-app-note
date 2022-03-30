import React from 'react';
import ItemListProducts from './ItemListProducts';
import ItemDetail from './ItemDetail';

const ItemListContainer = (props) => {
  const {greetings} = props
  
      
      return(
            <div>
          <h1>{greetings}</h1>
          <ItemListProducts/>
          <ItemDetail/>
          </div>
  
      )
  }
  export default ItemListContainer;