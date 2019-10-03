import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import axios from 'axios'
import ProductItem from './ProductItem'
import style from '../style.css'
import DetailProduct from './DetailProduct'
export class Home extends Component {

    state = {
        products: []
    }

    homeRender = () => {
        let hasil = this.state.products.map((product) => {
            return (
                <ProductItem product={product} />
            )
        })
        return hasil
    }

    componentDidMount() {
        axios.get(
            'http://localhost:2099/products'
        ).then((res) => {
            this.setState({ products: res.data })
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="ml-5 mt-4 col-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="border-bottom border-secondary card-title">Search</h1>
                                <form className="form-group mb-4">
                                    <h4>Name</h4>
                                    <input type="text" className="form-control"></input>

                                    <h4 className="mt-3">Price</h4>
                                    <input type="text" className="form-control mb-2" placeholder="Minimum"></input>
                                    <input type="text" className="form-control" placeholder="Maximum"></input>
                                </form>
                                <button className="btn btn-block btn-outline-primary">Search</button>
                                <button className="btn btn-block btn-outline-success">Show All</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 centerProd">
                        <Row>
                            {this.homeRender()}
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
