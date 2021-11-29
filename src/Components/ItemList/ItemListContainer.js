import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { ListaProductos } from '../ListaProductos';
import { Link, useParams } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';


const ItemListContainer = () =>{
    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
    const { catIdParams } = useParams(); 

      useEffect(() => {
          const promesa = new Promise ((res, rej)=> {
              setLoading(true);
              setTimeout(()=> {
                  res(ListaProductos)
              }, 2000)
          })
          if(catIdParams){
          promesa.then((ListaProductos)=>{
              console.log('OK el filtrado');
              setProductos(ListaProductos.filter(producto => producto.categoria === catIdParams)) 
          })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            }
            )
        } else {
            promesa.then((ListaProductos)=>{
                console.log('OK sin filtrar');
                setProductos(ListaProductos)
            })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            })
        }}, [catIdParams])
 
    console.log(productos)

    function onAdd(cant){
        console.log(cant)
    }
    

    return(
    <>
        <p style={{fontSize: 20, color: "black"}}> 
            Soy ItemListContainer 
        </p>
        <div style={{display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'}}>
            {loading 
                ? 
            <h1>Se está ejecutando la promesa..</h1> 
                : 
            <ItemList lista={productos}/> }
            <div className="card-footer"> 
            <Link to='/detalle'>
            <Button class="botonLista">
                Detalle
            </Button>
            </Link>

            </div>

        </div>
    </>
    )
    };

export default ItemListContainer
  