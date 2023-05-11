import React, { useState } from "react";
import './css/hizliSiparis.css'
const HızlıSiparis = ({hizliSiparis,setHizliSiparis}) => {

  const handleCheckboxChange = () => {
    setHizliSiparis(!hizliSiparis);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={hizliSiparis}
          onChange={handleCheckboxChange}
        />
        <span>Hızlı Sipariş? +20₺</span>
      </label>
    </div>
  );
};
export default HızlıSiparis;
