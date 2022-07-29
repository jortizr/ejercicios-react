import React from 'react';
import '../css/Testimonio.css';

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img
      className='img-testimonio'
      src={require(`../imagenes/Testimonio-${props.imagen}.png`)}
      alt='Foto de Emma'/>
      <div className='conten-txt-testimonio'>
        <p className='name-testim'>
          <strong>{props.nombre}</strong> in {props.pais}</p>
        <p className='cargo-testim'>
        {props.cargo} at <strong>{props.empresa}</strong></p>
        <p className='txt-testim'>"{props.testimonio}"</p>
      </div>
    </div>

  );
}

export default Testimonio;