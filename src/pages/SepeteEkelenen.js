import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './SepeteEkelenen.css'
const SepeteEkelenen = () => {
    
  const { id } = useParams();
  console.log("merhaba",id)
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
      <img src={ürünler.foto} alt={ürünler.PizzaAdi} />
      <h3>{ürünler.PizzaAdi}</h3>
      <p>{ürünler.Fiyat}</p>
      <p>{ürünler.Aciklamasi}</p>
      <p>{ürünler.SatisAdeti}</p>
      <p>{ürünler.Paun}</p>
    </div>

  );
};

export default SepeteEkelenen;
