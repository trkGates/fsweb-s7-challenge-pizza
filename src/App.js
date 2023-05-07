import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./layout/home";
import Siparis from "./pages/SepeteEkelenen";
import SiparisOlustur from "./layout/siparisOlustur";

const App = () => {
  return (
    <> 

<Routes>
  <Route path="/*" element={<Home/>}/>
  <Route path="/siparis-olustur" element={<SiparisOlustur/>}>
  <Route path="/siparis-olustur/:id" element={<Siparis/>}/> 
  </Route>

 
</Routes>

    
    
    </>
  );
};
export default App;
