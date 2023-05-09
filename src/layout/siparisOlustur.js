import React from 'react'
import './siparisOlustur.css'
import Sepet_icerikleri from '../pages/Siparis_Sayfasi/Sepet_icerikleri'
import Footer from '../pages/footer'
const SiparisOlustur = () => {
  return (
    <div>
      <div id='siparis-header'><h1 id='siparisH1'>Teknolojik Yemekler</h1></div>

      <div id='siparis-detayı'>
        <Sepet_icerikleri />
      </div>
      <Footer/>

    </div>
  )
}

export default SiparisOlustur
