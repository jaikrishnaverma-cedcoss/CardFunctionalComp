import React from 'react';
import Header from './Header';
function Card(props) {
    return ( 
        <>
       <div className="card" style={{backgroundColor:props.color}}>
            <Header head={props.head}/>
         <div className="body">
            <h1>{props.title}</h1>
            <p>{props.para}</p>
         </div>
       </div>
      </>
     );
}

export default Card;
