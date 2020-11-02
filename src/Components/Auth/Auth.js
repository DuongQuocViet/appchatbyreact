import React from "react";
import { Link, Route } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

export const Auth = () => {
    return(
        <div>
            <div>
                <Link to="/Auth/Login">Login</Link>
                &nbsp;
                <Link to="/Auth/Register">Register</Link>
            </div>
            <Route path = "/Auth/Login" component ={Login}/>
            <Route path = "/Auth/Register" component ={Register}/>
        </div>
    )
}