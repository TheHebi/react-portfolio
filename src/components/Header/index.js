import React from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../Navigation";
import About from "../About";
import Portfolio from "../Portfolio";
import Resume from '../Resume';
import "./style.css";


export default function Header() {

  return (
    <div className="header">
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume}/>
        </div>
      </HashRouter>
    </div>
  );
}