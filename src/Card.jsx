import React from 'react';
import ReactDOM from 'react-dom';

function Card(props){
   return(
    <div className="box">
        <h1 className="App-header">
            <div className="Cardprop" style={{color: `${props.color}`}}>
                <h2 className="CardHeader">
                    {props.title}
                </h2>
                <hr className="hr" style={{backgroundColor: `${props.hrcolor}`}}/>
                <p>
                    {props.text}
                </p>
            </div>
            
            
            
        </h1>
    </div>
   )
};

export default Card;