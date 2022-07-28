import React from 'react';

function Testimonio(){
  return(
    <div className='contenedor-testimonio'>
      <img 
      className='img-testimonio'
      src={require('../imagenes/Testimonio-Emma.png')}
      alt='Foto de Emma'/>
      <div className='conten-txt-testimonio'>
        <p className='cont-txt-testim'>Emma Bostian in Sweden</p>
        <p className='name-testim'>Software Engineer at Spotify</p>
        <p className='txt-testim'>"I've always struggled with learning JavaScript.
          I've taken many courses but freeCodeCamp's course was
           the one which stuck. Studying JavaScript as well as
            data structures and algorithms on freeCodeCamp gave
             me the skills and confidence I needed to land my
              dream job as a software engineer at Spotify."</p>
      </div>
    </div>

  );
}

export default Testimonio;