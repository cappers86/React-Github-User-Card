import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./Components.js/UserCard";
import Followers from './Components.js/Followers';
import styled from 'styled-components';

const Wrapper = styled.div `
 
 
`



class App extends React.Component {
  constructor(){
    super()
  
  
  this.state={
    name: [],
    }
  }
    componentDidMount () {
      axios
      .get(`https://api.github.com/users/fabpot`)
      .then (res => {
        
        this.setState({
          name: res.data.name,
          img: res.data.avatar_url,
          bio: res.data.bio,
          followers: res.data.followers,
          // id: res.data.blog,
        });
        console.log(res.data)
      })
      .catch (error => console.log (error));
    }

    render () {
      return (
        <Wrapper>
          <h1></h1>
          <UserCard user={this.state.name} img={this.state.img} followers={this.state.followers} />
          <Followers   />
          </Wrapper>
      )
    }

}



export default App;
