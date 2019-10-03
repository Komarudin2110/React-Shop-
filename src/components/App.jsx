import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import ManageProducts from './ManageProducts'

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path='/' exact component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/logout' component={Logout} />
                    <Route path='/ManageProducts' component={ManageProducts}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App

