import React from 'react';
import { Link } from 'react-router-dom';

// This component handles our register form
const Register = (props) => {

  return (
    <div className='page home-page'>
      <div className="auth-container">
        <h2>Join us!</h2>
        <hr />
        <form onSubmit={props.handleRegister} >
          <p>Email:</p>
          <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
          <p>Password:</p>
          <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
          <hr />
          <button className='form-button'>SIGN UP!</button> &nbsp; &nbsp; &nbsp;
          <Link to="/"><button >Login</button></Link>
        </form>
      </div>

    </div>

  );
}

export default Register;

