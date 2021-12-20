import React from 'react';
import Item from './Item';


export default function ItemList(props) {

    //le pueden hacer destructuring de props.lista para que no tenga que pasarle todo el objeto, pero acá no lo hago para que sepan que viene de una props del padre.
    console.log('este es el props.lista' + props.lista);
    console.log(props.lista)

    //el ItemList solo mastica la información que le trae el padre (container) y la manda a Item para que la presente en pantalla.

    return (
        <div style={{ width: '100%' }}>
            {props.lista.map((item, index) => {
                return (
                    <Item key={index} item={item} title={item.title} id={item.id} price={item.price} image={item.pictureURL} description={item.description} categoria={item.categoria} stock={item.stock}  />
                )
            })}
        </div>
    )
}