import { useState, useEffect } from "react";


const Item = () => {


  const mockProducts = [
    {
      id: 1,
      name: "Real Madrid",
      price: 2000,
      modelo: "Titular",
    },
    {
      id: 2,
      name: "Inter de Milán",
      price: 1000,
      modelo: "Suplente",
    },
    {
      id: 3,
      name: "Tottenham",
      price: 1000,
      modelo: "Alternativa",
    },
    
  ];

  const [products, setdataProd] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve(mockProducts);
      }, 3000);
    });
  };

  useEffect(() => {
    getProducts().then((dataProd) => {
      setdataProd(dataProd);
    });
  }, []);

  
  return (
    <div className="cardExp">
      <div className="imgCard">
  
      {products.map((product) => {
        const {id, name, price, color} = product;
        return (
          <div>
            <h2> {id} </h2>
            <h2> {name}</h2>
            <h2> $ {price} </h2>
            <h2> Modelo {color}</h2>
          </div>
        );
      })}
      
    </div>
    </div>
  );
};

export default Item;


  