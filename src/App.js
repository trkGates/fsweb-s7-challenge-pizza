import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./layout/home";
import Siparis from "./layout/siparis";


const App = (ürünler) => {
  return (
    <> 

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/siparis/:id" element={<Siparis ürünler={ürünler}/>}/> 
 
</Routes>

    
    
    </>
  );
};
export default App;
