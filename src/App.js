import React, { Component } from "react";

import "./App.css";
import Header from "./header";
import Body from "./Body";
import Footer from "./Footer";
import EmailCollector from "./EmailCollector";

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
          <Footer />
      </div>
    );
  }
}

export default App;
