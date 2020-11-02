import React from "react";
import {Route} from "react-router-dom"
import "./App.css";
import { Auth } from "./Components/Auth/Auth";
function App (){
  return (
    <div className="App">
        <Route path="/auth" component={Auth}/>     
    </div>
  );
}

export default App;
