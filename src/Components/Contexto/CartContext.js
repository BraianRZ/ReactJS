import { createContext, useState } from "react"


export const ContextApp = createContext([]);

function ContextAppProvider ({children}) {
   
    const [cartList, setcartList]= useState ([])

    
    const agregarProducto=(item)=>
        setcartList (item)




    return (
        <ContextApp.Provider value={{
        cartList,
        agregarProducto
    }}>
        {children}
        </ContextApp.Provider>
    
    )
}

export default ContextAppProvider

