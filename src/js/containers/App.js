import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch, useLocation} from 'react-router-dom'
import headerImg from '../../assets/images/blogo100.jpg'
import * as S from '../../css/styles'
import Head from '../containers/Header'
import Home from '../view/Home'
import Projects from '../view/Project'
import Resume from '../view/Resume'
import Contact from '../view/Contact'
import NotFound from '../view/NotFound'



function App() {

  return (
    <Router>
      <Head />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route path='/resume' component={() => {
          window.location.href = 'https://bchu.dev/brianchu_2020_resume.htm';
          return null;
        }} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>

  )
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
