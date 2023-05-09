import React, { useState } from 'react';
import HamurBoyutu from '../../comps/SiparisDetayları/PizzaBoyutu';
import HamurKalinligi from '../../comps/SiparisDetayları/HamurKalinligi';
import SiparisNotu from '../../comps/SiparisDetayları/SiparisNotu';
import EklenecekMalzemeler from '../../comps/SiparisDetayları/EklenecekMalzemeler';
import SepeteEkelenen from '../../comps/SiparisDetayları/SeçilenÜrün';
import Footer from '../footer';
import {Link } from 'react-router-dom';
import axios from 'axios';
import './Sepet_icerikleri.css'
import { useNavigate } from 'react-router-dom';

function Sepet_icerikleri() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      ÜrünAdı: ürünler.PizzaAdi,
      ÜrünFiyatı: ürünler.Fiyat + "TL",
      ÜrünAçıklaması: ürünler.Aciklamasi,
      ÜrünPuanı: ürünler.Puan,
      ÜrünSatışAdeti: ürünler.SatisAdeti,
      seçiliHamur: seciliHamur,
      SecilenBoyut: secilenBoyut,
      eklenenUrunler: eklenenUrunler,
      siparisNotu: siparisNotu,
    };
    
    
    fetch("https://6456b1042e41ccf16923222e.mockapi.io/pizzaSiparisleri", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      navigate(`/siparis-onayi/${sonSiparisId}`); // EĞER VERİ BAŞARI ŞEKİLDE YÜKLENDİYSE Yönlendirme yap
    })
    .catch((error) => console.log(error));
};

const [sonSiparisId, setSonSiparisId] = useState('');

console.log("sonSiparisId",sonSiparisId)

axios.get('https://6456b1042e41ccf16923222e.mockapi.io/pizzaSiparisleri')
  .then(response => {
    const sonSiparisIdFromAPI = response.data[response.data.length - 1].id;
    const sonSiparisIdNumber = parseInt(sonSiparisIdFromAPI);
    const yeniSiparisId = sonSiparisIdNumber + 1;
    setSonSiparisId(yeniSiparisId.toString());
    console.log('En son yüklenen siparişin ID\'si:', sonSiparisIdFromAPI);
  })
  .catch(error => {
    console.error('API\'den veriler alınamadı:', error);
  });




  const [ürünler, setÜrünler] = useState([]);

  console.log("Ürünleri Detaylı İnceliyorum", ürünler.Fiyat)

  // Pizza Boyutu
  const [secilenBoyut, setSecilenBoyut] = useState('Orta Boy (M)');
  console.log("Pizza Boyutu", { secilenBoyut });

  // Pizza Hamur Kalınlığı
  const [seciliHamur, setSeciliHamur] = useState('Normal');
  console.log("Pizza Hamuru Kalınlığı", { seciliHamur });

  // Pizza Sipariş Notu
  const [siparisNotu, setSiparisNotu] = useState("");
  console.log("Siparis Notu:", { siparisNotu },);

  const [eklenenUrunler, setEklenenUrunler] = useState([]);
  console.log("Eklenen Malzemeler:", { eklenenUrunler },);


  return (
    <div id='main-con-sepet-icerik'>
    <div id='main-container-sepet'>


      <form onSubmit={handleSubmit}>
<div id='container-Page'>
        <div className='container-Siparis'>
          <SepeteEkelenen ürünler={ürünler} setÜrünler={setÜrünler} />
        </div>

        <div id='Boyut-Hamur'>
        <div className='container-Siparis'>
          <HamurBoyutu secilenBoyut={secilenBoyut} setSecilenBoyut={setSecilenBoyut} />
        </div>

        <div className='container-Siparis'>
          <HamurKalinligi seciliHamur={seciliHamur} setSeciliHamur={setSeciliHamur} />
        </div>
        </div>

        <div className='container-Siparis'>
          <EklenecekMalzemeler eklenenUrunler={eklenenUrunler} setEklenenUrunler={setEklenenUrunler} />
        </div>

        <div className='container-Siparis'>
          <SiparisNotu siparisNotu={siparisNotu} setSiparisNotu={setSiparisNotu} />
        </div>

        <div className='container-Siparis'id='button-siparis'>
        <button type="submit" >SİPARİŞ VER</button>
      
        </div>
     </div>
      </form>
    </div>
    </div>
  );
}

export default Sepet_icerikleri;
