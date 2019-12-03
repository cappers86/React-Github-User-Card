import React from "react";
import styled from 'styled-components';


const Wrapper = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 30%;
margin: 5% 9%;
background-color: lightblue;
border: 1px black solid;
border-radius: 5px;
width: 60%;
margin: 0 20%;
text-align: center;

`
const Para = styled.div `
width: 70%;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: lightgrey;



`
const Img = styled.img `
max-width: 250px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`
const FollowersCard = ({followers, img}) => {
    return (
        <Wrapper>

            <Img src={img} alt="user"/>
           <Para> <p>Name:  {followers}</p>
           <p>Profile:<button href={followers.url}>Here{followers.html_url}</button></p>
           </Para>
           
        </Wrapper>
    )
}

export default FollowersCard; 