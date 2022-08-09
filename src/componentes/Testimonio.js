import React from 'react';
import '../css/Testimonio.css';
// function keysMatriz(matriz, rmatriz){
//   const listItems = matriz.map((rmatriz)=>
//   <p key={rmatriz.toString()}>
//     {rmatriz}
//   </p>
// );
// }

function Testimonio(props){
  
  return(
    
    <div className='contenedor-testimonio'>
        <img
          className='img-testimonio'
          src={require(`../imagenes/Testimonio-${props.imagen}.png`)}
          alt={`esta es la foto de ${props.nombre}`} />
        <div className='conten-txt-testimonio'>
          <p className='name-testim'>
            <strong>{props.nombre}</strong> in {props.pais}</p>
          <p className='cargo-testim'>
            {props.cargo} at <strong>{props.empresa}</strong></p>
          <p>"{props.testimonio}"</p>
        </div>
    </div>

  );
}

export default Testimonio;