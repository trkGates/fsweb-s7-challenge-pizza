import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./urunler.css";

const container = {
  visible: {
    transition: {
      // delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Urünler = () => {
  const [ürünler, setÜrünler] = useState([]);

  useEffect(() => {
    axios
      .get("https://6456b1042e41ccf16923222e.mockapi.io/pizza")
      .then((response) => {
        setÜrünler(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <motion.div
      id="ürünler-main"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div id="ürünler-container">
        <div className="ürünler">
          {ürünler.map((ürün) => (
            <motion.div variants={item}>
              <Link key={ürün.id} to={`/siparis-olustur/${ürün.id}`}>
                <button className="ürün-çeşitleri">
                  <img src={ürün.foto} alt={ürün.PizzaAdi} />
                  <div className="puan-satış-fiyat">
                    <h2>{ürün.PizzaAdi}</h2>
                    <div>
                      <p>{ürün.Paun}</p>
                      <p>({ürün.SatisAdeti})</p>
                      <p className="fiyat">{ürün.Fiyat}</p>
                    </div>
                  </div>
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Urünler;
