import './App.css';
import React, {Component} from 'react';
import Home from "./home/home";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Router } from "react-router-dom";

class DevCircle extends Component{

  render(){
    return(
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>

      // <Layout />

    );
  }

}

export default DevCircle;
