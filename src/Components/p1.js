import React from 'react';
import tvImage from '../Sources/tv.png';
import '../Styles/p1.css';

function p1() {
  return (
    <div className='title_page2'>
      <h1>Disfruta en tu TV</h1>
      <p>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
      <img src={tvImage} alt="TV" />
    </div>
  );
}

export default p1;