import React, {Component} from "react";

import "./app.css"
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";

import Header from "./commonComponents/headerComponent";

export default class AppComponent extends Component {
    constructor(props, context){
        super(props);
    }
    
    render(){
        return( // this is the jsx. this jsx implementation depends on the elements that are present in the react library
            <Router>
                <Header/>
            </Router>
        )
    } 

}