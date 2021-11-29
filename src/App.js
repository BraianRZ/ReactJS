import logo from './logo.svg';
import './App.css';
import { Componente1 } from './Components/Basico/Componente1';
import NavBar from './Components/NavBarr/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import Propiedades from './Components/Basico/Propiedades';
import { Componente2 } from './Components/Basico/Componente2';
import ItemListContainer1 from './Components/ItemList/ItemListContainer1';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from './Components/NavBarr/NavBar1';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './Components/Detalle/ItemDetailContainer'
import ItemList from './Components/ItemList/ItemList';



function App() {

  let condition = 'verdadero'
  let resultado = ''
  
  console.log(`El resultado es ${condition==='verdadero' ? 'correcto' : 'incorrecto'}`)
  
  
  //Objeto style
      const style = {backgroundColor: '#00aae4',
                      borderColor: 'red'
                      }
  
  
      const handlerOnClick = ()=>{
          console.log('saludar')
          console.log('despedir')
                     }
  
  return (
          <BrowserRouter> 
      <>
          
                <NavBar1/>
                <link to='./CartWidget.jsx'/>
                <cartWidget/>
                 <link/>
                <hr/>
                <NavBar/>
                <hr/>
                <Routes>
                <Route path='/ItemListContainer1' element={<ItemListContainer1/>} />
                <Route path='/ItemDetailContainer' element={ <ItemDetailContainer/>} />
                <Route path='/Propiedades' element={  <Propiedades/>} />
                <Route path='/ItemListContainer' element={<ItemListContainer/>} />
                <Route path='/ItemList' element={ <ItemList/>} />

                



             
              
               
               
                
                
                </Routes>

      </>
          </BrowserRouter>
      
       );

  }

export default App;
