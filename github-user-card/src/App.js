import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./Components.js/UserCard";
class App extends React.Component {
  state={
    name: [],
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
          id: res.data.blog,
        });
        console.log(res.data)
      })
      .catch (error => console.log (error));
    }

    render () {
      return (
        <div>
          <h1>User card</h1>
          <UserCard user={this.state.name} img={this.state.img} bio={this.state.bio} blog={this.state.blog} followers={this.state.followers} />
          </div>
      )
    }

}



export default App;
