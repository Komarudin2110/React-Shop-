import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import ManageProducts from './ManageProducts'
import { connect } from 'react-redux'
import { keepLogin } from '../actions/index'
import DetailProduct from './DetailProduct'

export class App extends Component {
    componentDidMount() {
        let userData = JSON.parse(localStorage.getItem('userData'))
        console.log(userData);

        if (userData) {
            this.props.keepLogin(userData)
        }
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path='/' exact component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/ManageProducts' component={ManageProducts} />
                    <Route path='/detail/:idproduct' component={DetailProduct} />
                </div>
            </BrowserRouter>
        )
    }
}

export default connect(null, { keepLogin })(App)

