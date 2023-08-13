import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters:[
     
      ],
      searchField:''
    };

   //console.log('constructor');
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then((users)=>
    this.setState(
    ()=>{
      return {monsters:users};
    }
    )
    );


    //console.log('componentDidMount');
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      ()=>{
        return {searchField};
      }
    ); 
  }

  render() {
  
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    

    return(
      <div className="App">

       <input 
       className='search-monsters' 
       type='search' 
       placeholder='search monstors' 
       onChange={
        onSearchChange
       } 
       />
       <CardList monsters={filteredMonsters}/>

      </div>
    );
  }
  
}

export default App;
