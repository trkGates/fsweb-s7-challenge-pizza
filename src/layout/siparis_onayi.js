import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./siparis_onayi.css";
function SiparisOnayi() {
  const { id } = useParams();
  console.log("merhaba", id);

  const [OnayDatası, setOnayDatası] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6456b1042e41ccf16923222e.mockapi.io/pizzaSiparisleri/${id}`)
      .then((response) => {
        setOnayDatası(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="onay-sayfasi-main">
      <div id="siparis-header">
        <h1 id="siparisH1">Teknolojik Yemekler</h1>
      </div>
      <div id="onay-sayfasi-1">
        <div>
          <div id="onay-sayfasi-container-1">
            <p id="lezzetin-yolda">lezzetin yolda</p>
            <h2>SİPARİŞ ALINDI</h2>
          </div>
          <hr />
          <div id="onay-sayfasi-container-2">
            <p id="onay-ürün-adi">{OnayDatası.ÜrünAdı}</p>
            <div id="onay-container-2-içerisi">
              <div>
                <p>
                  Boyut:{" "}
                  <span className="onay-font-kalin">
                    {OnayDatası.SecilenBoyut}
                  </span>
                </p>
                <p>
                  Hamur:{" "}
                  <span className="onay-font-kalin">
                    {OnayDatası.seçiliHamur}
                  </span>
                </p>
                <p>
                  Ek Malzemeler:{" "}
                  <span className="onay-font-kalin">
                    {OnayDatası.eklenenUrunler}
                  </span>
                </p>
                <p>
                  Sipariş Notu:{" "}
                  <span className="onay-font-kalin">
                    {OnayDatası.siparisNotu}
                  </span>
                </p>
                <p>
                  Sipariş Toplamı:{" "}
                  <span className="onay-font-kalin">
                    {OnayDatası.ÜrünFiyatı}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiparisOnayi;
