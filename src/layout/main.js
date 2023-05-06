import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Secenekler from './secenekler';
import Navmenü from '../comps/navmenü';
import { useHistory } from 'react-router-dom';

import './main.css'
const Main = () => {

    const history = useHistory();
    const scrollToOptions = () => {
        const optionsElement = document.getElementById('secenekler');
        if (optionsElement) {
          optionsElement.scrollIntoView({ behavior: "smooth" });
        }
      }


  return (
  
<div id='order-pizza'>

<div id='menü-içerik'>
    <div id='menü-yazıları'>
<h1 className='FONT-Barlow'>Teknolojik Yemekler</h1>
<p className='FONT-Satisfy'>fırsatı kaçırma</p>
<h1 className='FONT-Barlow-KOD'>KOD ACIKTIRIR</h1>
<h1 className='FONT-Barlow-KOD'>PIZZA, DOYURUR</h1>
<button id='main-button' onClick={scrollToOptions}>ACIKTIM</button>

</div>

</div>
</div>

  )
}

export default Main
