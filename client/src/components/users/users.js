import React, { Component } from 'react';
import './users.css';

class Users extends Component {

  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  

  render() {
    return (
      <div className="Users"> 
        <h3>The people behind the madness!</h3>       
        <ul>
          {this.state.users.map(users =>
            <li key={users.id}>{users.firstName }  {users.lastName}</li>            
          )}
        </ul>
      </div>
    );
  }
}

export default Users;
