import './App.css';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import Propiedades from './Components/Basico/Propiedades';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from './Components/NavBarr/NavBar1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './Components/Detalle/ItemDetailContainer'
import ItemList from './Components/ItemList/ItemList';
import Cart from './Components/Cart/Cart';



function App() {

  let condition = 'verdadero'
  let resultado = ''
  
  console.log(`El resultado es ${condition==='verdadero' ? 'correcto' : 'incorrecto'}`)
  
  
  //Objeto style
      const style = {backgroundColor: '#00aae4',
                      borderColor: 'red'
                      }
    
  return (
          <BrowserRouter> 
      <>          
                <NavBar1/>
                <hr/>
                <Routes>

                <Route path='/detalle' element={ <ItemDetailContainer/>} />
                <Route path='/Propiedades' element={  <Propiedades/>} />
                <Route path='/lista' element={<ItemListContainer/>} />
                <Route path='/ItemList' element={ <ItemList/>} />
                <Route path='cart' element={ <Cart/>} />
                                                    
                </Routes>

      </>
          </BrowserRouter>
      
       );

  }

export default App;
