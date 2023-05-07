import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Siparis = () => {
    
  const { id } = useParams();
  console.log(id)
  const [ürünler, setÜrünler] = useState([]);
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
    <div>
      <h2>Sipariş Sayfası</h2>
      <img src={ürünler.foto} alt={ürünler.PizzaAdi} />
      <h3>{ürünler.PizzaAdi}</h3>
      <p>{ürünler.Fiyat}</p>
      <p>{ürünler.Aciklamasi}</p>
      <p>{ürünler.SatisAdeti}</p>
      <p>{ürünler.Paun}</p>
    </div>

  );
};

export default Siparis;
