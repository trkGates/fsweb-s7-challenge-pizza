import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "./layout/main";
import Secenekler from './layout/secenekler';
import Siparisolustur from './pages/siparisolustur';
import Navmenü from "./pages/navmenü";
import Menüler from "./pages/menüler";


const App = () => {
  return (
    <>
<div id="deneme">
<Router>
      <div>




   {/* <Link to="/pizza">Secenekler</Link> */}



           <div><Main/></div> 
           <div><Navmenü/></div> 
           <div><Secenekler /></div> 



        <Switch>


          <Route path="/pizza">
            <Secenekler />
          </Route>



          <Route path="/pizza-olustur">
            <Siparisolustur />
          </Route>

        </Switch>

        


      </div>
    </Router>
    </div> </>
  );
};
export default App;
