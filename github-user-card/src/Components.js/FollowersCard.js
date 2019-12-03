import React from "react";
import styled from 'styled-components';
const Wrapper = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 30%;
margin: 5% 9%;
background-color: grey;
border: 1px black solid;
border-radius: 5px;
width: 60%;
margin: 0 20%;
text-align: center;

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
            <p className="name">Name: {followers}</p>
            <p className="name">Bio {}</p>

        </Wrapper>
    )
}

export default FollowersCard; 