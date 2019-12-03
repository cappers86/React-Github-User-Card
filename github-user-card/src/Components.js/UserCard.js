import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div `
width: 70%;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: lightblue;
  margin-bottom: 30px;


`
const Img = styled.img `
max-width: 250px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`

const UserCard = ({img, user, followers,  bio, blog}) => {
    return (
        <Wrapper>

            <Img src={img} alt="Image"/>
            <p>Name: {user}</p>
            <p>Bio: {bio}</p>
            <p>Blog: {blog}</p>
            <p>Followers: { followers }</p>
        </Wrapper>
    )
}

export default UserCard