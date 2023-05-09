import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./layout/home";
import SepeteEkelenen from "./comps/SiparisDetayları/SeçilenÜrün";
import SiparisOlustur from "./layout/siparisOlustur";
import Sepet_icerikleri from "./pages/Siparis_Sayfasi/Sepet_icerikleri";
import SiparisOnayi from "./layout/siparis_onayi";

const App = () => {
  return (
    <> 

<Routes>
  <Route path="/*" element={<Home/>}/>
  <Route path="/siparis-olustur" element={<SiparisOlustur/>}>
  <Route path="/siparis-olustur/:id" element={<Sepet_icerikleri/>}/> 
  </Route>
  <Route path="/siparis-onayi" element={<SiparisOnayi/>}>
<Route path="/siparis-onayi:id" element={<SiparisOnayi/>}/>
    </Route>


</Routes>

    
    
    </>
  );
};
export default App;
