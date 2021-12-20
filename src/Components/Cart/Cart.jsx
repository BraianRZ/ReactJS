import {useContext} from 'react'
import { ContextApp } from '../Contexto/CartContext'



function Cart() {

    const {cartList, vaciarCarrito} = useContext(ContextApp)
    
    
    
    return (
        <div>

            {cartList.map(prod => <li key={prod.id}> {prod.name} </li>) }
        </div>
    )
}

export default Cart