import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "../pages/main";
import Navmenü from "../comps/navmenü";
import Secenekler from '../pages/secenekler';
import Footer from "../pages/footer";

const Home = () => {
  return (
    <div>
        
      <div><Main/></div> 
      <div><Navmenü/></div> 
      <div><Secenekler /></div> 
      <div><Footer/></div>
      
    </div>
  )
}

export default Home
