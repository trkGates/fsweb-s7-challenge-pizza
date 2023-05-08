import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './urunler.css';

const Urünler = () => {
  const [ürünler, setÜrünler] = useState([]);

  useEffect(() => {
    axios.get('https://6456b1042e41ccf16923222e.mockapi.io/pizza')
      .then(response => {
        setÜrünler(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
      <div id='ürünler-main'>
        <div id='ürünler-container'>
          <div className='ürünler'>
            {ürünler.map(ürün => (
              <Link key={ürün.id} to={`/siparis-olustur/${ürün.id}`}> 
                <button className='ürün-çeşitleri'>
                  <img src={ürün.foto} alt={ürün.PizzaAdi} />
                  <div className='puan-satış-fiyat'>
                    <h2>{ürün.PizzaAdi}</h2>
                    <div>
                      <p>{ürün.Paun}</p>
                      <p>({ürün.SatisAdeti})</p>
                      <p className='fiyat'>{ürün.Fiyat}</p>
                    </div>
                  </div>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Urünler;
