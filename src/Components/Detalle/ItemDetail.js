import React, { useState, useContext} from 'react';
import { ContextApp } from '../Contexto/CartContext';
import ItemCount from '../ItemList/ItemCount';

export const ItemDetail = ({item}) => {
    console.log('este es el prop de item')
    console.log(item)


    const ItemDetail = ({item})=> {
        const [count, setCount] = useState(1)


        const {cartList, agregarProducto} = useContext(ContextApp)

        
       
        function onAdd(props) {
            return (

            setCount(cant)
            agregarProducto({item, cantidad: cant})
            
            )
        }


    }

    return (
        
         <><div>
            <img src={item.pictureURL} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <ItemCount stock={item.stock} id={item.id} />
          
        </div></>
                
    )
}

export default ItemDetail;