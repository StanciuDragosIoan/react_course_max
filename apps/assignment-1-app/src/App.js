import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    users: [
      {
        username: 'Dragos'
      },

      {
        username: 'Irina'
      },

      {
        username: 'Alexandra'
      },

      {
        username: 'Dragos Gabriel'
      },

      {
        username: 'Mariana'
      }
    ]
  };

  handleValueChage = e => {
    console.log(e.target.value);
  };

  changeName = e => {
    this.setState({
      users: [
        {
          username: 'Dragos'
        },

        {
          username: 'Irina'
        },

        {
          username: 'Alexandra'
        },

        {
          username: e.target.value
        },

        {
          username: 'Mariana'
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>App JS</h1>
        <UserInput
          value={this.state.users[3].username}
          change={this.changeName}
        />
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[1].username} />
        <UserOutput username={this.state.users[2].username} />
        <UserOutput username={this.state.users[3].username} />
        <UserOutput username={this.state.users[4].username} />
      </div>
    );
  }
}

export default App;
