import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {  Route, Switch } from 'react-router'
import Login from './components/login';
import Register from './components/register';
class App extends Component {
    render() {
        return ( 
            <div className = "App" >
                <Switch>
                    <Route path ="/login"  component={Login}></Route>
                    <Route path="/" exact component={Register}></Route>
                </Switch>
            </div>
        );
    }
}
export default App;