import React, { useState, useEffect } from "react";
import * as yup from "yup";
import "./css/EklenecekMalzemeler.css";

const urunler = [
  { name: "Mısır " },
  { name: "Sucuk " },
  { name: "Sosis " },
  { name: "Ananas " },
  { name: "Kabak " },
  { name: "Biber " },
  { name: "Soğan " },
  { name: "Sarımsak " },
  { name: "Zeytin " },
];

const EklenecekMalzemeler = ({ eklenenUrunler, setEklenenUrunler }) => {
  const [urunlerIsSelected, setUrunlerIsSelected] = useState(
    urunler.map((urun) => ({
      ...urun,
      isSelected: false,
    }))
  );

  // yup ile En az 4 malzeme kontrol ediyor.
  const schema = yup.object().shape({
    selectedItems: yup
      .array()
      .min(4, "En az 4 malzeme seçmelisiniz.")
      .of(yup.string())
      .required(),
  });
  // UYARI MESAJINI YAZDIRMA ÇEŞİTİ....
  let uyarıMesajı = null;
  try {
    schema.validateSync({ selectedItems: eklenenUrunler });
  } catch (error) {
    uyarıMesajı = <div>{error.message}</div>;
  }

  // illaha gerekli bir şey değil. sadece consola 4 tane az ürün seçilirse yazdırıyor
  useEffect(() => {
    schema
      .validate({ selectedItems: eklenenUrunler })
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  }, [eklenenUrunler, schema]);

  const handleCheckboxChange = (urun) => {
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
  };

  const urunButonlari = urunlerIsSelected.map((urun, index) => (
    <label key={index} className="checkbox">
      <input
        type="checkbox"
        value={urun.name}
        checked={urun.isSelected}
        onChange={() => handleCheckboxChange(urun)}
      />
      <span className="checkmark"></span>
      <span id="MalzemeAdi">{urun.name}</span>
    </label>
  ));

  return (
    <div id="EklenecekMalzemeler-Main">
      <h3>Ek Malzemeler</h3>
      <p>En fazla 9 malzeme seçebilirsiniz. 5₺</p>
      <div id="Ürünler">{urunButonlari}</div>
      {<p id="uyari">{uyarıMesajı}</p> /*YUP İLE GELEN MESAJ YAZIDIRILIYOR */}
    </div>
  );
};

export default EklenecekMalzemeler;
