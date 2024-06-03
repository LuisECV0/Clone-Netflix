import React from 'react';
import '../Styles/Banner.css';

function Banner() {
  return (
    <div className="banner">
      <h1>Películas ilimitadas, programas de televisión y más</h1>
      <p>Mira en cualquier lugar. Cancela en cualquier momento.</p>
      <p>Listo para mirar? Introduzca su correo electrónico para crear o reiniciar su membresía.</p>
        <div>
          <input type='text' placeholder='asas'>
          </input>
          <a className='button_1'>Empezar</a>
        </div>
    </div>
  );
}

export default Banner;
