import React, { useState } from 'react';
import './Sepet_icerikleri.css'
import HamurBoyutu from '../../comps/SiparisDetayları/PizzaBoyutu';
import HamurKalinligi from '../../comps/SiparisDetayları/HamurKalinligi';
import SiparisNotu from '../../comps/SiparisDetayları/SiparisNotu';
import EklenecekMalzemeler from '../../comps/SiparisDetayları/EklenecekMalzemeler';

function Sepet_icerikleri() {


  



  
// ------------------------------------
const handleSubmit = (event) => {
  event.preventDefault();
  const data = {
    eklenenUrunler:eklenenUrunler,
    seçiliHamur: seciliHamur,
    SecilenBoyut: secilenBoyut,
    siparisNotu:siparisNotu,
  };
  fetch("https://6456b1042e41ccf16923222e.mockapi.io/pizzaSiparisleri", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};


console.clear();
// Pizza Boyutu
const [secilenBoyut, setSecilenBoyut] = useState('Orta Boy (M)');
console.log("Pizza Boyutu",{secilenBoyut});

// Pizza Hamur Kalınlığı
const [seciliHamur, setSeciliHamur] = useState('Normal');
console.log("Pizza Hamuru Kalınlığı",{seciliHamur});

// Pizza Sipariş Notu
const [siparisNotu, setSiparisNotu] = useState("");
console.log("Siparis Notu:",{siparisNotu},);

const [eklenenUrunler, setEklenenUrunler] = useState([]);
console.log("Eklenen Malzemeler:",{eklenenUrunler},);


  return (
    <div id='main-container'>

      
  <form onSubmit={handleSubmit}>

  <HamurBoyutu secilenBoyut={secilenBoyut} setSecilenBoyut={setSecilenBoyut} />

   <HamurKalinligi seciliHamur={seciliHamur} setSeciliHamur={setSeciliHamur}/>

   <SiparisNotu siparisNotu={siparisNotu} setSiparisNotu={setSiparisNotu} />

  <EklenecekMalzemeler eklenenUrunler={eklenenUrunler} setEklenenUrunler={setEklenenUrunler}/>
 

    <button type="submit">Sipariş Ver</button>


    </form>
    </div>
  );
}

export default Sepet_icerikleri;
