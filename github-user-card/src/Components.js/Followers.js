 
import React from 'react';
import axios from "axios";
import FollowersCard from "./FollowersCard";





class Followers extends React.Component {

    state ={
      followers: [],
    }

    componentDidMount = () => {
    axios
    .get(`https://api.github.com/users/fabpot/followers`)
    .then (res => {
      console.log("follower data", res.data);
      this.setState({
        followers: res.data
      });
    })
    .catch (error => console.log (error));

  }



    render (){
    return (

        <div>
           {this.state.followers.map (followers => (
                <FollowersCard key={followers.id}
                    img={followers.avatar_url} 
                    followers = {followers.login}
                    profile = {followers.html_url}
                />
           ))}
        </div>
    );
}
 }

 export default Followers;