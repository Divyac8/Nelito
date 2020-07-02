import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router';
import axios from 'axios';
import createBrowserHistory from 'history/createBrowserHistory';
import Text from './text';
const history= createBrowserHistory()
class Register extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        deptName: '',
        emailId: '',
        password: '',
        status:''
        }
    }
    handelChange=  (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handelSubmit= (e) =>{
        e.preventDefault()
        const User ={
            username : this.state.username,
            deptName : this.state.deptName,
            emailId : this.state.emailId,
            password : this.state.password,
            status : this.state.status
        }
        axios.post('http://localhost:4000/users/register',User)
        .then(res =>{
        console.log(res);
        if(res){
        this.props.history.push('/login');
        }
        })
    }
    render() {
        return (
            <div className="register">
                <Text></Text>
                <form className="form-group offset-lg-4" onSubmit = {this.handelSubmit}  >
                    <div className="form-group col-md-6 ">
                        <label> Name:</label>
                        <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handelChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label  >Department Name:</label>
                        <input type="text" className="form-control" name="deptName" onChange={this.handelChange} value={this.state.deptName}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Email</label>
                        <input type="email" className="form-control" name="emailId" onChange={this.handelChange} value={this.state.emailId}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>password </label>
                        <input type="text" className="form-control" name="password" onChange={this.handelChange} value={this.state.password} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>status </label>
                        <input type="text" className="form-control" name="status" onChange={this.handelChange} value={this.state.status} />
                    </div>
                    <button  className="btn btn-success btn-register"  >Register</button>
                    <br></br><br></br><br></br>
                    <a className="login-page" href="/login">Return to Login page</a>
                </form>
            </div>
        )
    }
}
export default Register;