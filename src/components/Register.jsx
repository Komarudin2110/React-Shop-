import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export class Register extends Component {
    
    // Function untuk me Register
    onSubmitClick = () => {
        let _username = this.username.value
        let _email = this.email.value
        let _password = this.password.value

        axios.get(
            'http://localhost:2099/users'
        ).then((res) => {
            let takenName = res.data.filter((user) => {
                return user.username === _username
            })
            if (takenName.length > 0) {
                return Swal.fire({
                    type: 'error',
                    title: 'Username not Available !',
                    text: 'try with another username',
                })
            }

            let takenEmail = res.data.filter((user) => {
                return user.email === _email
            })
            if (takenEmail.length > 0) {
                return Swal.fire({
                    type: 'error',
                    title: 'Email not Available !',
                    text: 'try with another email',
                })
            }
            axios.post(
                'http://localhost:2099/users',
                {
                    username: _username,
                    email: _email,
                    password: _password
                },
                Swal.fire(
                    'Register Berhasil',
                    'Selamat Datang !',
                    'success'
                )
            )
        })
    }

    render() {
        return (
            <div className='cardcontainer'>
                <div className='col-6 mx-auto mt-5  card'>
                    <div className='card-body'>
                        <div className='border-bottom border-secondary card-title'>
                            <h1>Register</h1>
                        </div>
                        <form className='form-group'>
                            <div className="card-title">
                                <h4 className="">Username</h4>
                            </div>
                            <input ref={(input) => { this.username = input }} className="form-control" type='text' />
                            <div className="card-title">
                                <h4>E-mail</h4>
                            </div>
                            <input ref={(input) => { this.email = input }} className="form-control" type='email' /> <div className="card-title">
                                <h4>Password</h4>
                            </div>
                            <input ref={(input) => { this.password = input }} className="form-control" type='password' />
                        </form>
                        <button className="btn btn-primary btn-block" onClick={this.onSubmitClick}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
