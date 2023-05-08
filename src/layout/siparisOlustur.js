import React from 'react'
import SepeteEkelenen from '../pages/Sepet/SepeteEkelenen'
import './siparisOlustur.css'
import Sepet_icerikleri from '../pages/Sepet/Sepet_icerikleri'
import Siparis_onayi from '../pages/siparis_onayi'
const SiparisOlustur = () => {
  return (
    <div>
      <div id='siparis-header'><h1 id='siparisH1'>Teknolojik Yemekler</h1></div>

      <div id='siparis-ürünü'>
        <SepeteEkelenen />
      </div>
      <div id='siparis-detayı'>
        <Sepet_icerikleri />
      </div>




    </div>
  )
}

export default SiparisOlustur
