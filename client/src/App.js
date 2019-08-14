import React from 'react'
import './App.css';
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router';
import decode from 'jwt-decode';


import UserForm from './components/UserForm'
import News from './components/News'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'


import {
  loginUser,
  registerUser,
  verifyUser,
  fetchUser,
  updateUser,
  fetchNews
} from './services/api-helper';


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      currency: [],
      news: [],
      UserForm: {
        name: "",

      },
      currentUser: null,
      authFormData: {
        email: "",
        password: ""
      }
    };
  }

  // async componentDidMount() {
  //   try {
  //     const user = await fetchUser();
  //     const news = await fetchNews();
  //     this.setState({
  //       user: user,
  //       data: news,

  //     });
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  async componentDidMount() {
    const user = await verifyUser();
    if (user) {
      this.setState({
        currentUser: user
      })
    }
  }

  // getUser = async () => {
  //   const users = await fetchUser();
  //   this.setState({
  //     user: users,
  //   })
  // }


  handleUpdateUser = async (data) => {
    const userz = await updateUser(this.state.currentUser.id, data);
    this.setState(prevState => ({
      user: [...prevState.user, userz]
    }));
  };

  //  Auth
  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: userData
    })
    this.props.history.push('/dashboard')
  }

  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
    this.props.history.push('/login')
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (

      < div className="App" >
        <h1>Vallet</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/news">News</Link>
        </nav>
        <div>
          {this.state.currentUser
            ?
            <>
              <p>{this.state.currentUser.username}</p>
              <button onClick={this.handleLogout}>Logout</button>
            </>
            :
            <button onClick={this.handleLoginButton}>Login/Register</button>}
        </div>

        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/"
          render={(props) => (
            <UserForm
              {...props}
              handleSubmit={this.handleUpdateUser}
            />
          )} />
        <Route exact path="/news"
          render={(props) => (
            <News
              news={this.state.news}
            />
          )} />

        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        {/* <Route
          exact path="/"
          render={() => (
            <UserList
              users={this.state.users}
              UserForm={this.state.UserForm}
              handleFormChange={this.handleFormChange}
              newUser={this.newUser} />
          )}
        /> */}

        <footer>
          <h5>@Vallet 2019. All Rights Reserved. </h5>
        </footer>
      </div >
    )
  }
}

export default withRouter(App)
