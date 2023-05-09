import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import './css/SeçilenÜrün.css'

const SepeteEkelenen = ({ürünler,setÜrünler}) => {
    
  const { id } = useParams();
  console.log("merhaba",id)
  useEffect(() => {
    axios.get(`https://6456b1042e41ccf16923222e.mockapi.io/pizza/${id}`)
    .then(response => {
        setÜrünler(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (

    <div id='container_urun'>
      <div id='SecilenUrun-img'><img src={ürünler.foto} alt={ürünler.PizzaAdi} /></div>
      
      <h3>{ürünler.PizzaAdi}</h3>

      <div id='fiyat-puan-satıs'>
      <h2 id='urun-fiyati'>{ürünler.Fiyat}₺</h2>
      <div id='puan-adet'>
      <p>{ürünler.Paun}</p>
      <p>({ürünler.SatisAdeti})</p>
      </div>
      </div>
      <p id='urun-acıklaması'>{ürünler.Aciklamasi}</p>
    </div>

  );
};

export default SepeteEkelenen;
