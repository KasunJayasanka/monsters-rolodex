import { Component } from "react";
import './card-container.styles.css';

class CardContainer extends Component{

    render(){
        
        const {name,email,id}=this.props.monster;

        return(
            <div className="card-container" key={id}>
              <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set1&size=180x180`}></img>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
        );
        
    }
}

export default CardContainer;