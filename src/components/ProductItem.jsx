import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CardText, CardTitle } from 'reactstrap'
import style from '../style.css'

export class ProductItem extends Component {
    render() {
        let { id, name, desc, price, picture } = this.props.product
        return (
            <div className="card col-md-3 col-lg-  col-xl-3 mx-3 cardSize mb-3 mt-4">
                <img alt="" className="ProductPict mx-auto mt-3" src={picture}></img>
                <div className="card-body">
                    <CardTitle className="font-weight-bold padName">{name}</CardTitle>
                    <CardText className="padDesc" >{desc}</CardText>
                    <CardText className="padDesc" >{price}</CardText>

                    <input type="text" className="form-control" />
                    <Link to={'/detail/' + id}><button className="btn btn-block btn-secondary my-2">Detail</button></Link>
                    <button className="btn btn-block btn-primary">Add to Cart</button>
                </div>
            </div>
        )
    }
}

export default ProductItem
