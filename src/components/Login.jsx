import React, { Component } from 'react'
import {LoginAct } from '../actions/index'
import { connect } from 'react-redux'

export class Login extends Component {

    // Function untuk Login
    onSignInClick = () => {
        let nameLogin = this.username.value
        let passwordLogin = this.password.value
        this.props.LoginAct(nameLogin, passwordLogin)
    }

    render() {
        return (
            <div className='col-6 mx-auto mt-5 card'>
                <div className='card-body'>
                    <div className='border-bottom border-secondary card-title'>
                        <h1>Login</h1>
                    </div>
                    <form className="form-group">
                        <div className="card-title">
                            <h4>Username</h4>
                        </div>
                        <input ref={(input) => { this.username = input }} type='text' className="form-control" />
                        <div className="card-title">
                            <h4>Password</h4>
                        </div>
                        <input ref={(input) => { this.password = input }} type='password' className="form-control" />
                    </form>
                    <button className="btn btn-outline-primary btn-block" onClick={this.onSignInClick} >Sign in</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {LoginAct})(Login)
