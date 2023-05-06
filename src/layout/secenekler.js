import React from 'react'
import Oneriler from '../comps/öneriler'
import './secenekler.css'
import Menüler from '../comps/menüler'
import Urünler from '../comps/urunler'
const Secenekler = () => {
  return (
    <div id='secenekler'>
     <div><Oneriler/></div> 
      <div><Menüler/></div>
      <div><Urünler/></div>
    </div>
  )
}

export default Secenekler
