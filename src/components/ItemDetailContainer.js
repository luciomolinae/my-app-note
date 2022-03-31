import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import ItemListProducts from "./ItemListProducts";


const ItemDetailContainer = () => {

    const [DataProducts, setDataProducts] = useState 

    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            return resolve(ItemListProducts)
        })
    }

    useEffect(() =>{
        getProducts().then((producto) =>{
            setDataProducts(producto)
            console.log('Llamaste al Mock', producto)
        }).finally(() => {
            console.log('Termino la llamada')
        })
    })

    return(
        
            <ItemDetail data={DataProducts}/>
        

    );

}

export default ItemDetailContainer