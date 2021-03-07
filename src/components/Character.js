// Write your Character component here
import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
color: white;
max-width: 100%;
border: 2px solid;
border-color: tomato;
border-style: groove;
margin: 20px 150px;
padding: 10px;
`;
export default function Character (props){
     return (
         <CardDiv>
         <h2>Name: {props.name}</h2>
         <p>Eye Color: {props.eyeColor}</p>
         <p>Hair Color: {props.hairColor}</p>
         <p>Skin Color: {props.skinColor}</p>
         </CardDiv>
     ); 
}
