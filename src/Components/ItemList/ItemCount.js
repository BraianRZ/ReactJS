import {useState} from "react";
import {ItemDetail} from 'react';



 function ItemCount(props) {

      
    
    const [Count, setCount] = useState(0);

   
    const sumarContador = () => {
        if (Count < props.stock) {
            setCount(Count + 1)
        } else {
            alert('La Cantidad supera el stock disponible');
        }
    }

    
    const restarContador = () => {
        if (Count > 1) {
            setCount(Count - 1)
        } else {
            alert('¿Eliminar item del carrito?'); 
            setCount(0);
                }
}
    
const agregarCarrito = () => {
    const productoNuevo = {
        "id":id,
        "title":title,
        "stock":stock
    }
    setCartList([...cartList, newProduct]);
    onAdd(stockAvailable, quantity);
    setEstado(false);
}


      
    //const onAdd = ({item.pictureURL, item.title, item.description, item.price, item.stock, item.id}) => {
       // const {item.pictureURL, item.title, item.description, item.price, item.stock, item.id} = props
            
            
   
        return (
            <div>

                <button onClick={sumarContador}>+</button>

                <p>{Count}</p>
                
                <button onClick={restarContador}>-</button>

                <button onClick={agregarCarrito}>Agregar al carrito</button>
               
                <ItemDetail stock={item.stock} id={item.id} title={item.title} price={item.price} />

                

            </div>

            
        );

}


        export default ItemCount
    