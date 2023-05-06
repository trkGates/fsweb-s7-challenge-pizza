import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "./pages/main";
import Secenekler from './pages/secenekler';
import Navmenü from "./comps/navmenü";
import Footer from "./pages/footer";


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
           <div><Footer/></div>


        <Switch>


          <Route path="/pizza">
            <Secenekler />
          </Route>



     

        </Switch>

        


      </div>
    </Router>
    </div> </>
  );
};
export default App;
