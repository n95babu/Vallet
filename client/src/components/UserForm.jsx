import React, { Component } from 'react'

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      phone: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,

    });
  }

  submit = (ev) => {
    ev.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      first_name: '',
      last_name: '',
      phone: '',

    })
    this.props.history.push('/users')
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.submit}>
          <label htmlFor="first_name"> First Name </label>
          <input
            type="text"
            name="first_name"
            value={this.state.first_name}
            id="first_name"
            onChange={this.handleChange}
          />
          <label htmlFor="first_name"> Last Name </label>
          <input
            type="text"
            name="last_name"
            value={this.state.last_name}
            id="last_name"
            onChange={this.handleChange}
          />
          <label htmlFor="first_name"> Phone </label>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            id="phone"
            onChange={this.handleChange}
          />

          <input
            type="submit"
            value="Update"
          />

        </form>
      </div>
    );
  }
}

export default UserForm
