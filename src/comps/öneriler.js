import React from "react";
import "./öneriler.css";
import { Link } from "react-router-dom";
const Oneriler = () => {
  return (
    <div id="dsadas">
      <div id="hepsi-menü">
        <div id="hepsi-iç">
          <div id="tekli-sol-menü">
            <div id="kart1">
              <div id="ozel">
                <h1 id="özel-Lezzetus-h1">Özel Lezzetus</h1>
                <Link to="/urunler_sayfasi">
                <button className="oneri-butonlar">
                  SİPARİŞ VER
                </button>
                </Link>
              </div>
            </div>
          </div>

          <div id="ikili-menü">
            <div id="kart2">
              <div id="burger-menü">
                <h1 id="Hackathlon-Burger">Hackathlon Burger Menü</h1>
                <Link to="/urunler_sayfasi">
                <button className="oneri-butonlar">SİPARİŞ VER</button>
                </Link>
              </div>
            </div>

            <div id="kart3">
              <div id="çok-hızlı">
                <h1 id="Hackathlon-Burger-h1">
                  <span id="çoook-red">Çoooook</span> hızlı npm gibi kurye
                </h1>
                <Link to="/urunler_sayfasi">
                <button className="oneri-butonlar">SİPARİŞ VER</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oneriler;
