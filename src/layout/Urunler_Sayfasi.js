import React from 'react'
import Urunler from '../comps/urunler'
import Footer from '../pages/footer'
import { Link } from 'react-router-dom'
const Urunler_Sayfasi = () => {
  return (
    <div>
     <div id="siparis-header">
        <div>
        <h1 id="siparisH1">Teknolojik Yemekler</h1>
        <h3 id="yönlendirme">
          <Link to="/">Anasayfa</Link>
          {" "} /  {" "}
          <a>Seçenekler</a>
        </h3>
        </div>
      </div>
      <Urunler/>
      <Footer />

    </div>
  )
}

export default Urunler_Sayfasi
