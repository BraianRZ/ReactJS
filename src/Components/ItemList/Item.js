import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';



export default function Item({item}) {

//el componente Item es de presentación, su responsabilidad va a ser la de presentar la información en pantalla. 
//RECUERDEN: ItemListContainer solo tiene la responsabilidad de la promesa o fetch a una API, la info que recolecta se la pasa a ItemList, que solo tiene la responsabilidad de mapear ese Array de productos y pasarle cada objeto producto al componente que lo va a mostrar en pantalla (Item).

    console.log('este es el prop de item' + item)
    console.log(item)

    return (
            <li key={item.id}>
                <div>
                    <div>
                        <Link to={`/item/${item.id}`}>
                        <img src={item.pictureURL} alt={item.title} />
                        </Link>
                    </div>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <ItemCount stock={item.stock} id={item.id} />
                    </div>
                </div> 
            </li>
            )
    
}