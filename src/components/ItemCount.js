import React,{useState} from 'react'


const ItemCount = ({stock}) =>{

    const initial = 0;
    const [cantidad, useContador] = useState(0);

    const ClickSumar =  () => {
        useContador (cantidad +1);
    };
    const ClickRestar = () => {
        useContador (cantidad -1);
    };

    return (
        <div>
            <button onClick={ClickSumar} disabled={cantidad === stock ? true : false}>+</button>
            <button onClick={ClickRestar} disabled={cantidad === initial ? true : false}>-</button>
            <p>Cantidad: {cantidad}</p>
        </div>
    )


}


// const ItemCount = () =>{
    
//     const [numero, setNumero] = useState(0)
//     const Aumentar = () =>{
//         setNumero(numero + 1)
//     }

//     const Reducir = () =>{
//         if (numero > 0){
//         setNumero(numero - 1)
//     }
//     }
//     return(
//         <>
//            <h5> {numero}</h5>
//             <button onClick={Aumentar}>+</button>
//             <button onClick={Reducir}>-</button>
//             <button>Comprar</button>
//         </>
//     )
// }

export default ItemCount