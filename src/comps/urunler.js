import React from 'react'
import ürün1 from '../image/ürünler/food-1.png';
import ürün2 from '../image/ürünler/food-2.png';
import ürün3 from '../image/ürünler/food-3.png';

import './urunler.css';


const Urünler = () => {
  return (
    <div id='ürünler-main'>

 <div id='ürünler-container'>

<div className='ürünler'>

<button className='ürün-çeşitleri'>
<img src={ürün1}></img>
<div className='puan-satış-fiyat'>
  <h2>Terminal Pizza</h2>
  <div>
  <p>4.9</p>
  <p>(200)</p>
  <p className='fiyat'>60₺</p>
  </div>
</div>
</button>

<button className='ürün-çeşitleri'>
<img src={ürün2}></img>
<div className='puan-satış-fiyat'>
  <h2>Position Absolute Acı Pizza</h2>
  <div>
  <p>4.9</p>
  <p>(928)</p>
  <p className='fiyat'>85₺</p>
  </div>
</div>
</button>

<button className='ürün-çeşitleri'>
<img src={ürün3}></img>
<div className='puan-satış-fiyat'>
  <h2>useEffect Tavuklu Burger</h2>
  <div>
  <p>4.9</p>
  <p>(462)</p>
  <p className='fiyat'>75₺</p>
  </div>
</div>
</button>

</div>
</div>


    </div>
  )
}

export default Urünler
