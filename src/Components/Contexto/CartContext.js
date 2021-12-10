import { createContext, useState } from "react"
import Item from "../ItemList/Item"


export const ContextApp = createContext([])

function ContextAppProvider ({ children }) {
   
    const [cartList, setcartList] = useState ([])

    
    const agregarProducto=(productos)=>{
        setcartList ([...cartList, productos])
    }

    const vaciarCarrito=()=>{
        setcartList([])
    }


    return (
        <ContextApp.Provider value={{
        cartList,
        agregarProducto,
        vaciarCarrito
    }}>
        {children}
        </ContextApp.Provider>  
    
    )
}

export default ContextAppProvider

