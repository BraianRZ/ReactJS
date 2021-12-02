import React from 'react';
import { useEffect, useState } from 'react';
import { ListaProductos } from '../ListaProductos';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () =>{
    const [productoIndividual, setProductoIndividual]= useState({}); 
    const [loading, setLoading] = useState(true);
    const { itemIdParams } = useParams();
   
    
      useEffect(() => {
          const promesaIndividual = new Promise ((res, rej)=> {
              setTimeout(()=> {
                  res(ListaProductos.find(producto => producto.id == itemIdParams)) 
              }, 2000)
          })
          promesaIndividual.then((prodEncontrado)=>{
              console.log('OK');
              setProductoIndividual(prodEncontrado) 
          })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            }
            )
        }, [itemIdParams])  // esto es una DEPENDENCIA, porque depende del valor que tome ese ID depende si se va a ejecutar todo de vuelta lo que está en el useEffect o no //
     
    console.log(productoIndividual);

    function onAdd(cant){
        console.log(cant)
    }
    
    return(
    <>
        <p style={{fontSize: 20, color: "black"}}> 
            Lista 
        </p>
        <div style={{display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'}}>
            {loading 
                ? 
            <h1>Se está ejecutando la promesa del detalle..</h1> 
                : 
            <ItemDetail item={productoIndividual}/> }
        </div>
    </>
    )
    };

export default ItemDetailContainer