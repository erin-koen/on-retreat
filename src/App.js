import React, { Component } from 'react';
import logo from '../src/OnRetreat_Logo.png';
import './App.css';
import Header from './header'

class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-body">
          <Header />
          <h1>
            on retreat is a vibrant <br/>
            collection of unique belongings <br/>
            found in the far corners <br/>
            of the world, curated by <br/>
            an eclectic group of expert travelers 

          </h1>
        </header>
      </div>
    );
  }
}

export default App;
