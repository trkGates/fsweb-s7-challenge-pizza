import React from 'react'
import { useState } from 'react';

const urunler = [
    { name: 'Mısır' },
    { name: 'Sucuk' },
    { name: 'Sosis' },
    { name: 'Ananas' },
    { name: 'Kabak' },
    { name: 'Biber' },
    { name: 'Soğan' },
    { name: 'Sarımsak' },
    { name: 'Zeytin' },
  ];

  const EklenecekMalzemeler = ({eklenenUrunler, setEklenenUrunler})=> {

    const [urunlerIsSelected, setUrunlerIsSelected] = useState(urunler.map((urun) => ({
        ...urun,
        isSelected: false,
      })));


    const urunButonlari = urunlerIsSelected.map((urun, index) => (
        <label key={index} className="checkbox">
        <input
        type="checkbox"
        value={urun.name}
        checked={urun.isSelected}
        onChange={() => {
        const yeniUrunler = urunlerIsSelected.map((u) =>
        u.name === urun.name ? { ...u, isSelected: !u.isSelected } : u
        );
        setUrunlerIsSelected(yeniUrunler);
        if (urun.isSelected) {
        setEklenenUrunler((prevUrunler) =>
        prevUrunler.filter((u) => u !== urun.name)
        );
        } else {
        setEklenenUrunler((prevUrunler) => [...prevUrunler, urun.name]);
        }
        }}
        />
        <span className="checkmark"></span>
        {urun.name}
        </label>
        ));
    




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
  return (
    <div>
    <h3>Eklenecek Ürünler:</h3>
    {urunButonlari}
  </div>

  )
}

export default EklenecekMalzemeler
