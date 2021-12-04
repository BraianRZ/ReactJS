import React, { useState } from 'react';
import ItemCount from '../ItemList/ItemCount';

export const ItemDetail = ({item}) => {
    console.log('este es el prop de item')
    console.log(item)


    const ItemDetail = ({item})=> {
        const [count, setCount] = useState(1)
        
        function onAdd(cant){
            setCount(cant)
            
        }

    }

    return (
        
         <div>
            <img src={item.pictureURL} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <ItemCount stock={item.stock} id={item.id} />
        </div>
                
    )
}