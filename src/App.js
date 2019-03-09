import React, { Component } from "react";

import "./App.css";
import Header from "./header";
import Body from "./Body";
import Footer from "./Footer";
import EmailCollector from "./EmailCollector";
import insta from "../src/insta.png"


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Body />
          <EmailCollector className="email-input" />
          <a href="https://www.instagram.com/on_retreat/"><img className="insta-icon" src={insta} /></a>
      </div>
    );
  }
}

export default App;
