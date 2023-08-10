import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Kasun'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            
          <h1>{this.state.name}</h1>
          <button onClick={() => this.setState({name: 'Kasun Perera'})}>Change Name</button>
        </header>
      </div>
    );
  }
  
}

export default App;
