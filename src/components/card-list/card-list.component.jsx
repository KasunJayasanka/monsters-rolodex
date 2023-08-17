// import { Component } from "react";
import './card-list.styles.css';

import CardContainer from '../card-container/card-container.component';

const CardList = ({monsters})=>(

        
    <div className="card-list">      
        {monsters.map((monster)=>{
          return (
            <CardContainer monster={monster} />
            );
        })}
    </div> 

);

// class CardList extends Component{

//     render(){

//         console.log('render');
//         const {monsters}=this.props;
//         //console.log(this.props);

//         return(
//         <div className="card-list">      
//         {monsters.map((monster)=>{
//           const {id,name,email}=monster;
//           return (
//             <CardContainer monster={monster} />
//             );
//         })}
//        </div> 
//         );
//     }
// }

export default CardList;