import React, { useState } from 'react';
import Siparis_onayi from '../siparis_onayi';

function Sepet_icerikleri() {
  const [eklenenUrunler, setEklenenUrunler] = useState([]);

  function secilenler(event) {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setEklenenUrunler((preveklenenUrunler) => [...preveklenenUrunler, value]);
    } else {
      setEklenenUrunler((preveklenenUrunler) =>
        preveklenenUrunler.filter((topping) => topping !== value)
      );
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(eklenenUrunler);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input type="checkbox" value="Pepperoni" onChange={secilenler} />
            Pepperoni
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" value="Mushrooms" onChange={secilenler} />
            Mushrooms
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" value="Onions" onChange={secilenler} />
            Onions
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" value="Sausage" onChange={secilenler} />
            Sausage
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" value="Extra cheese" onChange={secilenler} />
            Extra cheese
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Siparis_onayi EklenenUrunlerDatası={eklenenUrunler} />
    </div>
  );
}

export default Sepet_icerikleri;
