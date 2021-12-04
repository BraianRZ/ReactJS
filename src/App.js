import './App.css';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import Propiedades from './Components/Basico/Propiedades';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from './Components/NavBarr/NavBar1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './Components/Detalle/ItemDetailContainer'
import Cart from './Components/Cart/Cart';
import { createContext, useEffect } from 'react';
import { ViewPort } from './Components/ViewPort';
import { ContextApp } from './Components/Contexto/CartContext';


function App() {

  let condition = 'verdadero'
  let resultado = ''
  
  console.log(`El resultado es ${condition==='verdadero' ? 'correcto' : 'incorrecto'}`)
  
  
  //Objeto style
      const style = {backgroundColor: '#00aae4',
                      borderColor: 'red'
                      }

                    
    
  return (
    
          <ContextApp.Provider value={{}}>
          
            <BrowserRouter> 
      <>          
                <NavBar1/>
                <hr/>
                  <Routes>

                  <Route path='item/:itemIdParams' element={ <ItemDetailContainer/>} />
                  <Route path='/Propiedades' element={ <Propiedades/>} />
                  <Route exact path='/' element={ <ItemListContainer/>} />
                  <Route path='categoria/:catIdParams' element={ <ItemListContainer/>} />
                  <Route path='cart' element={ <Cart/>} />
                                                    
                </Routes>
                <ViewPort/>
                
      </>
            </BrowserRouter>
          
          </ContextApp.Provider>
      
       );

  }

export default App;
