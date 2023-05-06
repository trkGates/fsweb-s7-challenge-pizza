import React from 'react'
import Logo1 from '../image/navFotolar/1.svg'
import Logo2 from '../image/navFotolar/2.svg'
import Logo3 from '../image/navFotolar/3.svg'
import Logo4 from '../image/navFotolar/4.svg'
import Logo5 from '../image/navFotolar/5.svg'
import Logo6 from '../image/navFotolar/6.svg'

import './menüler.css'
const Menüler = () => {
  return (
    <div>
      
<div id='yazilar-menü'>
<p>en çok paketlenen menüler</p>
<h2>Acıktıran Kodlara Doyuran Lezzetler...</h2>
</div>

<div id='navbar1'>
    <div id='Menüler-içerik-logolar'>

      <button className='icerik-logolar-isimleri'>
      <img src={Logo1} alt="Logo1"/>
<p>Ramen</p>
      </button>

      <button className='icerik-logolar-isimleri'>
      <img src={Logo2} alt="Logo2" />
<p>Pizza</p>
      </button>

      <button className='icerik-logolar-isimleri'>
      <img src={Logo3} alt="Logo3" />
<p>Burger</p>
      </button>

      <button className='icerik-logolar-isimleri'>
      <img src={Logo4} alt="Logo4" />
<p>Kızartmalar</p>
      </button>

      <button className='icerik-logolar-isimleri'>
      <img src={Logo5} alt="Logo5" />
<p>Fast Food</p>
      </button>

      <button className='icerik-logolar-isimleri'>
      <img src={Logo6} alt="Logo6" />
<p>Gazlı İçecekler</p>
      </button>


    </div>
    </div>



    </div>
  )
}

export default Menüler
