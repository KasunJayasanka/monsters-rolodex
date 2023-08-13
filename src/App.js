import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters:[
     
      ]
    };
    console.log('constructor');
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      <div className="App">
       <h1>{this.state.monsters.map((monster)=>{
          return <div key={monster.id}><h1>{monster.name}</h1></div>
       })}</h1>
      </div>
    );
  }
  
}

export default App;
