import React, { useState } from 'react';
import '../Styles/Banner.css';

function Banner() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email) {
      alert(`El correo electrónico ingresado es: ${email}`);
    }
  };

  return (
    <div className="banner">
      <h1>Películas y series ilimitadas y mucho más</h1>
      <p>Disfruta donde quieras. Cancela cuando quieras.</p>
      <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
      <form onSubmit={handleSubmit}>
        <input  
          className='input-email'
          type='email' 
          placeholder='Email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className='button_1'>
         <span className='txt'>Comenzar</span> 
          <i className="fa-solid fa-chevron-right"></i>
          </button>
      </form>
    </div>
  );
}

export default Banner;
