import React from "react";
import Sepet_icerikleri from "../pages/Siparis_Sayfasi/Sepet_icerikleri";
import Footer from "../pages/footer";

import "./siparisOlustur.css";
import { useEffect } from "react";

const SiparisOlustur = () => {
  const scrollToOptions = () => {
    const optionsElement = document.getElementById('siparisH1');
    if (optionsElement) {
      optionsElement.scrollIntoView({ behavior: "smooth" });
    }
  }
useEffect(() => {
  scrollToOptions(); 
}, [])
  return (
    <div>
      <div id="siparis-header">
        <div>
          <h1 id="siparisH1">Teknolojik Yemekler</h1>
          <h3 id="yönlendirme">
            <a href="/">Anasayfa</a> <span>/</span>
            <a href="/urunler_sayfasi">Seçenekler</a> <span>/</span> 
            <a>Sipariş</a>
          </h3>
        </div>
      </div>
      <div id="siparis-detayı">
        <Sepet_icerikleri />
      </div>
      <Footer />
    </div>
  );
};

export default SiparisOlustur;
