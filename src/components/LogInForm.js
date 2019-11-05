import React, { Component } from 'react';

class LogInForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
      console.log('called');
      this.props.history.push('/library')
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>

          <div className="imgcontainer">
            <img src="https://icon-library.net/images/avatar-png-icon/avatar-png-icon-5.jpg" alt="Avatar" className="avatar"/>
          </div>

          <div className="container">
            <label><b>Username</b></label>
            <input onChange={this.handleChange} value={this.state.username} type="text" name="username" required/>

            <label><b>Password</b></label>
            <input onChange={this.handleChange} value={this.state.password} type="password" name="password" autoComplete={'off'} required/>

            <button type="submit">Login</button>
            <label>
            <input type="checkbox" name="remember"/> Remember me
            </label>
          </div>

          <div className="container" style={{backgroundColor:'#f1f1f1'}}>
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>
      );
    }
 }

export default LogInForm;