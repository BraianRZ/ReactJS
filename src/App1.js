import logo from './logo.gif';
import './css/App.css';


function App() {

let condition = 'verdadero'
let resultado = ''

console.log(`El resultado es ${condition==='verdadero' ? 'correcto' : 'incorrecto'}`)



const style = {bakcgroundColor: 'blue',
                borderColor: 'red'
                }


    const handlerOnClick = ()=>{
        console.log('saludar')
    }

return (
    <div className="App" style={ style } onClick={ handlerOnClick }> 
        Este es un componente App
        <img alt=''></img>
        <img alt='' />
        <imput />
    </div>
);
}

export default App; 