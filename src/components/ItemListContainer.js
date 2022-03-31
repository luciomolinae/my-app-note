import React from 'react';
import ItemListProducts from './ItemListProducts';
import { useEffect, useState } from 'react';
import mockProducts from '../data/mockProducts';

const ItemListContainer = () => {

    const [products, setdataProd] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve(mockProducts);
        console.log(mockProducts)
      }, 3000);
    });
  };

  useEffect(() => {
    getProducts().then((dataProd) => {
      setdataProd(dataProd);
    });
  }, []);


    
    return(
          <div>
        <ItemListProducts prodListData= {products} />
        </div>

    )
}
export default ItemListContainer;