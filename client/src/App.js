import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/MainComponents/NavBar'
import AppRouter from "./AppRouter";
import {withRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div className={"container"}>
            <NavBar/>
            <AppRouter/>
        </div>
    );
  }
}

export default withRouter(App) ;
