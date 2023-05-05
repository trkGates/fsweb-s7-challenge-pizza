import React from 'react'

import Logo1 from '../image/navFotolar/1.svg'
import Logo2 from '../image/navFotolar/2.svg'
import Logo3 from '../image/navFotolar/3.svg'
import Logo4 from '../image/navFotolar/4.svg'
import Logo5 from '../image/navFotolar/5.svg'
import Logo6 from '../image/navFotolar/6.svg'

import './navmenü.css'



const Navmenü = () => {
  return (
    <>
    <div id='navbar'>
    <div id='navbaricerik'>
      <div className='icerik'>
      <img src={Logo1} alt="Logo1" />
<p>YENİ! Kore</p>
      </div>

      <div className='icerik'>
      <img src={Logo2} alt="Logo2" />
<p>Pizza</p>
      </div>

      <div className='icerik'>
      <img src={Logo3} alt="Logo3" />
<p>Burger</p>
      </div>

      <div className='icerik'>
      <img src={Logo4} alt="Logo4" />
<p>Kızartmalar</p>
      </div>

      <div className='icerik'>
      <img src={Logo5} alt="Logo5" />
<p>Fast Food</p>
      </div>

      <div className='icerik'>
      <img src={Logo6} alt="Logo6" />
<p>Gazlı İçecekler</p>
      </div>


    </div>
    </div>
    </>
  )
}

export default Navmenü
