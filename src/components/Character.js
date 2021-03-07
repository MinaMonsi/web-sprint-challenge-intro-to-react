// Write your Character component here
import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
color: #800000;
text-align: center;
max-width: 100%;
border: thick double;
border-color: #D27D2D;
margin: 30px 300px;
`;

const NameH2 = styled.h1`
text-align: left;
color: #4A0404;
margin: 20px 80px;
`;

export default function Character (props){
     return (
         <CardDiv>
         <NameH2>Name: {props.name}</NameH2>
         <h2>Eye Color: {props.eyeColor}</h2>
         <h2>Hair Color: {props.hairColor}</h2>
         <h2>Skin Color: {props.skinColor}</h2>
         <h2>Birth Year: {props.birthYear}</h2>
         </CardDiv>
     ); 
}
