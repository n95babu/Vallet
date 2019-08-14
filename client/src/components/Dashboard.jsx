import React, { Component } from 'react';
import { verifyUser } from '../services/api-helper'

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      }
    }

  }

  async componentDidMount() {
    const user = await verifyUser();
    console.log(user)
    this.setState({
      currentUser:
      {
        first_name: user.first_name,
        email: user.email

      }
    })
  }




  render() {

    return (
      <div>
        <h3>{this.state.currentUser.email}'s Dashboard</h3>
        {<h3>Hello{this.state.currentUser.first_name} !</h3>}
      </div>
    )
  }
}

export default Dashboard
