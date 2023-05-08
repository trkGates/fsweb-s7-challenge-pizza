import React, { useState } from 'react';
import Siparis_onayi from '../siparis_onayi';
import './Sepet_icerikleri.css'

const urunler = [
  { name: 'Mısır' },
  { name: 'Sucuk' },
  { name: 'Sosis' },
  { name: 'Ananas' },
  { name: 'Kabak' },
  { name: 'Biber' },
  { name: 'Soğan' },
  { name: 'Sarımsak' },
  { name: 'aaaaaa' },
];

function Sepet_icerikleri() {
  const [eklenenUrunler, setEklenenUrunler] = useState([]);

  function secilenler(event) {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setEklenenUrunler((prevEklenenUrunler) => [...prevEklenenUrunler, value]);
    } else {
      setEklenenUrunler((prevEklenenUrunler) =>
        prevEklenenUrunler.filter((topping) => topping !== value)
      );
    }
  }


  function handleSubmit(event) {
    event.preventDefault();

    console.log(eklenenUrunler);
  }

  const [selectedSize, setSelectedSize] = useState("");
  const sizeOptions = [
    { name: "Küçük", value: "S" },
    { name: "Orta", value: "M" },
    { name: "Büyük", value: "L" },
  ];

  const handleSizeSelection = (value) => {
    setSelectedSize(prevSize => prevSize === value ? '' : value);
  };
  



  const [urunlerIsSelected, setUrunlerIsSelected] = useState(urunler.map((urun) => ({
    ...urun,
    isSelected: false,
  })));
  
  const urunButonlari = urunlerIsSelected.map((urun, index) => (
    <button
      key={index}
      onClick={() => {
        const yeniUrunler = urunlerIsSelected.map((u) =>
          u.name === urun.name ? { ...u, isSelected: !u.isSelected } : u
        );
  
        if (urun.isSelected) {
          setUrunlerIsSelected((prevUrunler) =>
            prevUrunler.map((u) =>
              u.name === urun.name ? { ...u, isSelected: false } : u
            )
          );
          setEklenenUrunler((prevUrunler) =>
            prevUrunler.filter((u) => u !== urun.name)
          );
        } else {
          setUrunlerIsSelected(yeniUrunler);
          setEklenenUrunler((prevUrunler) => [...prevUrunler, urun.name]);
        }
      }}
      style={{ backgroundColor: urun.isSelected ? "red" : "" }}
    >
      {urun.name}
    </button>
  ));



  const [seciliHamur, setSeciliHamur] = useState('normal');

  const hamurSeciminiDegistir = (event) => {
    setSeciliHamur(event.target.value);
  }

  const [siparisNotu, setSiparisNotu] = useState('');

  const siparisNotunuGuncelle = (event) => {
    setSiparisNotu(event.target.value);
  }

  return (
    <div id='main-container'>

    <div>
      <label htmlFor="hamur-kalinligi">Hamur Kalınlığı:</label>
      <select name="hamur-kalinligi" id="hamur-kalinigi" value={seciliHamur} onChange={hamurSeciminiDegistir}>
        <option value="ince">İnce</option>
        <option value="normal">Normal</option>
        <option value="kalın">Kalın</option>
      </select>
      <p>Seçilen hamur kalınlığı: {seciliHamur}</p>
    </div>

  <div>
    <h3>Eklenecek Ürünler:</h3>
    {urunButonlari}
    <p>Seçilen Ürünler: {eklenenUrunler.join(", ")}</p>
  </div>


<div>
      {sizeOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => handleSizeSelection(option.value)}
          style={{
            backgroundColor: selectedSize === option.value ? "red" : "",
          }}
        >
          {option.name}
        </button>
      ))}
      <p>Seçilen boyut:{selectedSize}</p>
    </div>

    <div>
      <label htmlFor="siparis-notu">Sipariş Notu:</label>
      <textarea name="siparis-notu" id="siparis-notu" value={siparisNotu} onChange={siparisNotunuGuncelle}></textarea>
      <p>Sipariş Notu: {siparisNotu}</p>
    </div>




      <Siparis_onayi EklenenUrunlerDatası={eklenenUrunler} siparisNotu={siparisNotu} />
    </div>
  );
}

export default Sepet_icerikleri;
