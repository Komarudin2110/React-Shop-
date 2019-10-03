import React, { Component } from 'react'
import axios from 'axios'
import style from '../style.css'
export class DetailProduct extends Component {
    state = {
        arrProducts: []
    }

    componentDidMount() {
        axios.get(
            'http://localhost:2099/products/' + this.props.match.params.idproduct
        ).then((res) => {
            this.setState({
                arrProducts: res.data
            })
        })
    }
    render() {
        let { name, desc, price, picture } = this.state.arrProducts
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img style={{ width: "300px", margin: '90px 0 0 100px' }} src={picture} />
                    </div>
                    <div className="col">
                        <div className="card text-center border-primary text-primary" style={{ width: '100%', margin: '100px 500px 0 0' }}>
                            <div className="card-header font-weight-bold">
                                <h2>
                                    {name}
                                </h2>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><h5>{desc}</h5></li>
                                <li className="list-group-item"><h5>{price}</h5></li>
                                <li className="list-group-item"></li>
                            </ul>
                        </div>
                        <div className="mt-4" style={{ marginLeft: "24%" }}>
                            <button className="btn btn-primary btnMinMax"><h1>-</h1></button>
                            <input type="text" className="mx-4"></input>
                            <button className="btn btn-primary btnMinMax"><h1>+</h1></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailProduct
