import React, { Component } from 'react';
import axios from 'axios';
import Register from './register';
import createBrowserHistory from 'history/createBrowserHistory';
const history= createBrowserHistory()
class Login extends Component {
  constructor() {
    super();
    this.state = {
        username: "",
        password: ""
      }
    }
    handelChange= (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
    handelSubmit=(e)=>{
      e.preventDefault()
      const LoginUser ={
        username : this.state.username,
        password : this.state.password
      }
      axios.post('http://localhost:4000/users/authenticate',LoginUser)
      .then(res =>{
        if(res){
          sessionStorage.setItem('token',res.data.token)
          alert('login sucessfully')
        }
      })
    }
  render() {
    return (
      <div className="login">
        <h4>Welcome to Login Application!</h4>
        <form className="form-group offset-lg-4" onSubmit={this.handelSubmit}  >
            <div class="form-group col-md-6">
                <label> Name</label>
                <input type="text" className="form-control" name="username" onChange={this.handelChange} value={this.state.username}/>
            </div>
            <div class="form-group col-md-6">
                <label>password </label>
                <input type="text" className="form-control" name="password" onChange={this.handelChange} value={this.state.password} />
            </div>
            <button  className="btn btn-success btn-register" >Login</button>
            <a className="register-page" href="/">Return to Register page</a>
        </form>
    </div>
    )
  }
}
export default Login;