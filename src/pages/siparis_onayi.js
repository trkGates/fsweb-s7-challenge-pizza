import React, { useState } from "react";

function SiparisOnayi({EklenenUrunlerDatası}) {
console.log("Çekilen veriler",EklenenUrunlerDatası);
  return (
    <div>
      <h2>Seçili malzemeler: gfdgdfgdf</h2>
      <ul>
        {EklenenUrunlerDatası.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </div>
  );
}

export default SiparisOnayi;
