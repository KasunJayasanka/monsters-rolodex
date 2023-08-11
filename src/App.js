import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: {firstName:'Kasun',lastName:'Rajapaksha'}
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
              <h1>{this.state.name.firstName} {this.state.name.lastName}</h1>
              <button onClick={()=>{
                this.setState({name:{firstName:'Nimal',lastName:'Jayasanka'}})
                console.log(this.state)
              }}>
              Change Name </button>
        </header>
      </div>
    );
  }
  
}

export default App;
