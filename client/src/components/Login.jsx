import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';


// This component handles our login form and has a link to the register form
const Login = (props) => {
  const gif = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <div className='page home-page'>
      <div className="auth-container">
        <div className="hero home-hero">
          <div>
            <animated.div style={gif}>
              <h2>login</h2>
              <hr />
              <form onSubmit={(e) => {
                e.preventDefault();
                props.handleLogin();
              }} >

                <p>Email:</p>
                <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
                <p>Password:</p>
                <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
                <hr />
                <button className="form-button">Login</button>
                <Link to="/register"><button type="button">Register</button></Link>
              </form>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
