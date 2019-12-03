import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
  state={
    name: [],
    }

    componentDidMount () {
      axios
      .get(`https://api.github.com/users/cappers86`)
      .then (res => {
        console.log(res.data)
        this.setState({
          
        });
      })
      .catch (error => console.log (error));
    }

    render () {
      return (
        <div>
          <h1>User card</h1>
        </div>
      )
    }

}



export default App;
