import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "./layout/home";
import SiparisOlustur from "./layout/siparisOlustur";
import Sepet_icerikleri from "./pages/Siparis_Sayfasi/Sepet_icerikleri";
import SiparisOnayi from "./layout/siparis_onayi";
import Urunler_Sayfasi from "./layout/Urunler_Sayfasi";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/urunler_sayfasi" element={<Urunler_Sayfasi />} />
        <Route path="/siparis-olustur" element={<SiparisOlustur />}>
          <Route path="/siparis-olustur/:id" element={<Sepet_icerikleri />} />
        </Route>
        <Route path="/siparis-onayi" element={<SiparisOnayi />}>
          <Route path="/siparis-onayi:id" element={<SiparisOnayi />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
