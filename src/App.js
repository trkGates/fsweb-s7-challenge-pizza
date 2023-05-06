import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./layout/home";


const App = () => {
  return (
    <>
<div id="deneme">
<Router>
      <div>




   {/* <Link to="/pizza">Secenekler</Link> */}

<Home/>
 

      </div>
    </Router>
    </div> </>
  );
};
export default App;
