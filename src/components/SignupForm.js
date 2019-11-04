import React, { Component } from 'react';

class LogInForm extends Component {
  state = {
    username: '',
    password: '',
    name: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
      console.log('called');
  }

  render() {
      console.log(this.props)
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>

          <div className="imgcontainer">
            <img src="https://icon-library.net/images/avatar-png-icon/avatar-png-icon-5.jpg" alt="Avatar" className="avatar"/>
          </div>

          <div className="container">
            <label><b>Name</b></label>
            <input onChange={this.handleChange} value={this.state.name} type="text" name="name" required/>
            
            <label><b>Username</b></label>
            <input onChange={this.handleChange} value={this.state.username} type="text" name="username" required/>

            <label><b>Password</b></label>
            <input onChange={this.handleChange} value={this.state.password} type="password" name="password" autoComplete={'off'} required/>

            <button type="submit">SignUp</button>
            <label>
            <input type="checkbox" name="remember"/> Remember me
            </label>
          </div>
        </form>
      </div>
      );
    }
 }

export default LogInForm;