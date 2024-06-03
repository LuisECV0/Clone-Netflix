import React from 'react';
import '../Styles/Header.css';
import logo from '../Sources/Logonetflix.png';

function Header() {
  return (  
    
    <div className="header">
      <img src={logo} alt="Netflix Logo" className="header_logo" />
      <div className="header_right">
        <select className="header_languege">
          <option value="español">English</option>
          <option value="ingles">Español</option>
        </select>
        <a href="#" className="header_login">Iniciar Sesión</a>
      </div>
    </div>
  );
}

export default Header;
