import "../Card/Card.css"
import React, { useState } from "react";

export default function Cards({click}) {
    const [click, setClick] = useState(0);


    const addBuy = () => {
        setClick(click + 1);
        
    };
    const removeBuy = () => {
        if (click > 0) {
        setClick(click - 1);
        }
    };

    return (
    <div className="card">
        <h4>Compraste: {click}</h4>
        <button onClick={addBuy} className="addBuy">Comprar</button>
        <button onClick={removeBuy} className="removeBuy">Quitar Compra</button>
    </div>
    );
}