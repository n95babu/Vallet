import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


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
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div className="UserUpdate">
        <form onSubmit={this.submit}>
          <label htmlFor="first_name"> First Name </label>
          <input
            type="text"
            name="first_name"
            value={this.state.first_name}
            id="first_name"
            onChange={this.handleChange}
          />
          <label htmlFor="last_name"> Last Name </label>
          <input
            type="text"
            name="last_name"
            value={this.state.last_name}
            id="last_name"
            onChange={this.handleChange}
          />
          <label htmlFor="phone"> Phone </label>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            id="phone"
            onChange={this.handleChange}
          />

          <input
            className={useStyles.fab}
            type="submit"
            value="Update"
          />

        </form>
      </div>
    );
  }
}

export default UserForm
