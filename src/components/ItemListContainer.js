import React from 'react';
import ItemList from './ItemList/ItemList';

const ItemListContainer = ({children}) => {
  return (
    <div>
      <h2>{children}</h2>

      <ItemList/>
    </div>
  );
};

export default ItemListContainer;