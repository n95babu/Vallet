import React from 'react'
import './App.css';
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router';
import logo from './assets/vallet.png'
import UserForm from './components/UserForm'
import News from './components/News'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import CreateCoin from './components/CreateCoin'
import LandingPg from './components/LandingPg'

import {
  loginUser,
  registerUser,
  verifyUser,
  updateUser,
  createCoin,
  fetchNews,
  deleteCoin,
  fetchCurrentUser,
  ApiCap
} from './services/api-helper';


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      news: [],
      totalMarketCap: [],
      currentUser: null,
      authFormData: {
        email: "",
        password: ""
      },
      coinFormData: {
        coin: "",
        amount: 0,
        user_id: ""
      },
    };
  };

  async componentDidMount() {
    const data = await fetchNews();
    const cap = await ApiCap();
    this.setState({
      news: data,
      totalMarketCap: cap
    });

    const user = await verifyUser();
    const currentUser = await fetchCurrentUser(user.id)
    this.setState({
      currentUser: currentUser,
      coinFormData: {
        user_id: user.id
      },
    });
  };

  handleUpdateUser = async (data) => {
    const userz = await updateUser(this.state.currentUser.id, data);
    this.setState(prevState => ({
      user: [...prevState.user, userz]
    }));
  };

  newCoin = async (e) => {
    e.preventDefault();
    const coin = await createCoin(this.state.currentUser.id, this.state.coinFormData)
    this.setState(prevState => ({
      coinFormData: {
        coin: "",
        amount: "",
      },
    }));
    this.props.history.push('/dashboard')
  };

  handleCoinFormChange = async (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      coinFormData: {
        ...prevState.coinFormData,
        [name]: value
      },
    }));
  };

  deleteCoin = async (id) => {
    await deleteCoin(this.state.currentUser.id, id);
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        currencies: prevState.currentUser.currencies.filter(currency => currency.id !== id)
      },
    }));
  };

  //===================================== Auth ================================================
  handleLoginButton = () => {
    this.props.history.push("/")
  };

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    const currentUser = await fetchCurrentUser(userData.id)
    this.setState({
      currentUser: currentUser,
      coinFormData: {
        user_id: currentUser.id
      },
    });
    this.props.history.push('/home')
  };

  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
    this.props.history.push('/home')
  };

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    });
    this.props.history.push('/')
  };

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      },
    }));
  };




  render() {
    return (
      < div className="App" >
        <header className="header">
          <img className="logo" src={logo} alt="Logo" />
          <div id="header-nav">
            <ul>
              <li>
                {this.state.currentUser
                  &&
                  <>
                    <Link to="/home">Home</Link>
                    &nbsp; &nbsp; &nbsp;
                    <Link to="/dashboard">Dashboard</Link>
                    &nbsp; &nbsp; &nbsp;
                    <Link to="/news">News</Link>
                    &nbsp; &nbsp; &nbsp;
                    <Link onClick={this.handleLogout}>Logout</Link>
                  </>
                }
              </li>
            </ul>
          </div>
        </header>
        <Route exact path="/" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />

        <Route exact path="/dashboard"
          render={() =>
            <Dashboard
              currentUser={this.state.currentUser}
              deleteCoin={this.deleteCoin}
            />}
        />
        <Route exact path="/home"
          render={(props) => (
            <LandingPg />
          )}
        />
        <Route exact path="/new/user"
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
        <Route
          exact path="/new/coin"
          render={() => (
            <CreateCoin
              onChange={this.handleCoinFormChange}
              onSubmit={this.newCoin}
              currentUser={this.state.currentUser}
            />
          )}
        />

        {/* <footer>
          <h5>@Vallet 2019. All Rights Reserved. </h5>
        </footer> */}
      </div >
    )
  }
}
export default withRouter(App)
