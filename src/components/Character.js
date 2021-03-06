// Write your Character component here
import React from "react";

export default function Character (props){
     return (
         <div>{props.data.length > 0 ? data.map ((info) => 
            <h2>{info.name}</h2>) : console.log(0)}</div>
     
     ); 
}
