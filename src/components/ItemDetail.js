import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";


const ItemDetail = () => {

    const mockItem = [
        {
          id: 5,
          name: "Barcelona",
          price: 2000,
          modelo: "Titular",
          size: "L",
        },
    ];
    const [itemDetail, setItemDetail] = useState([]);

    const getItem = () => {
      return new Promise((resolve, reject) => {
        return setTimeout(() => {
          resolve(mockItem);
        }, 2000);
      });
    };
  
    useEffect(() => {
      getItem().then((dataItem) => {
        setItemDetail(dataItem);
      });
    }, []);

   
    const onAdd = (count) => {
        
      };
    
    return(
           <div>
            

           

            {itemDetail.map((item) => {
                const {id, name, price, modelo, size, details} = item;
                return (
                  <div>
                    <h2> {id} </h2>
                    <p>{details}</p>
                    <h2> {name}</h2>
                    <h2> $ {price} </h2>
                    <h2>  {modelo}</h2>
                    <h2>{size}</h2>
                  </div>
                );
              })}

           
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
               
            
           
     
                </div>
             
    )
}

export default ItemDetail;