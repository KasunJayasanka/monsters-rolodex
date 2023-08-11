import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters:[
      {id:'mon1',name:'Frankenstein'},
      {id:'mon2',name:'Dracula'},
      {id:'mon3',name:'Zombie'},
      {id:'mon4',name:'Wolfman'},
      {id:'mon5',name:'Mummy'}
      ]
    };
  }
  render() {
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
