import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2'

export class ManageProducts extends Component {
    state = {
        products: [],
        modal: false,
        selectedID: 0,
        namaDef: '',
        descDef: '',
        priceDef: '',
        pictureDef: ''
    }

    // Men-Edit Products
    editProduct = () => {
        let name_ = this.nameEdit.value
        let desc_ = this.descEdit.value
        let price_ = this.priceEdit.value
        let picture_ = this.pictureEdit.value

        axios.patch(
            `http://localhost:2099/products/${this.state.selectedID}`,
            {
                name: name_,
                desc: desc_,
                price: price_,
                picture: picture_
            }
        ).then((res) => {
            Swal.fire(
                'Product berhasil ditambah',
                '',
                'success'
            )
            this.componentDidMount()
            this.renProducts()
        })
    }


    // Men-Delete Products
    delProduct = (id) => {
        axios.delete(
            `http://localhost:2099/products/${id}`
        ).then((res) => {
            Swal.fire(
                'Product berhasil dihapus',
                '',
                'success'
            )
            this.componentDidMount()
            this.renProducts()
        })
    }

    // Meng-iput Products
    onAddClick = () => {
        let _name = this.name.value
        let _desc = this.desc.value
        let _price = this.price.value
        let _picture = this.picture.value

        axios.post(
            'http://localhost:2099/products',
            {
                name: _name,
                desc: _desc,
                price: _price,
                picture: _picture
            }
        ).then((res) => {
            Swal.fire(
                'Product berhasil di Input',
                '',
                'success'
            )
            this.componentDidMount()
            this.renProducts()
        })
    }

    // Mengambil products dari database
    componentDidMount() {
        axios.get(
            'http://localhost:2099/products'
        ).then((res) => {
            this.setState({ products: res.data })
        })
    }

    // Function Merender Products
    renProducts = () => {
        return this.state.products.map((val) => {
            return (
                <tr>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.desc}</td>
                    <td>{val.price}</td>
                    <td><img style={{ width: '80px' }} alt="pict" src={val.picture}></img></td>
                    <td>
                        <button className="btn btn-primary mr-3" onClick={() => { this.toggle(val.id, val.name, val.desc, val.price, val.picture) }}>Edit</button>
                        <button className="btn btn-danger" onClick={() => this.delProduct(val.id)} >Delete</button>
                    </td>
                </tr>
            )
        })
    }


    // Mengubah data ke state dari modal
    toggle = (id, nama, desc, price, picture) => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            selectedID: id,
            namaDef: nama,
            descDef: desc,
            priceDef: price,
            pictureDef: picture

        }));
    }
    render() {
        return (
            // Merender Products
            <div className="container">
                <h1 className="display-4 text-center lead">List-Products</h1>
                <table className="table table-hover text-center mt-5 ">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>DESC</th>
                            <th>PRICE</th>
                            <th>PICTURE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renProducts()}
                    </tbody>
                </table>

                {/* Input Products */}
                <h1 className="display-4 text-center lead">Input Product</h1>
                <table className="table table-hover text-center mt-5 ">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>DESC</th>
                            <th>PRICE</th>
                            <th>PICTURE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input placeholder="Input Name" ref={(input) => { this.name = input }} className="form-control" type="text" /></td>
                            <td><input placeholder="Input Desc" ref={(input) => { this.desc = input }} className="form-control" type="text" /></td>
                            <td><input placeholder="Input Price" ref={(input) => { this.price = input }} className="form-control" type="text" /></td>
                            <td><input placeholder="Input Image" ref={(input) => { this.picture = input }} className="form-control" type="text" /></td>
                            <td><button className="btn btn-success" onClick={this.onAddClick}>Add</button></td>
                        </tr>
                    </tbody>
                </table>

                {/* Tampilan untuk Modals */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit Product</ModalHeader>
                    <ModalBody>
                        <h5>Name</h5>
                        <input ref={(input) => { this.nameEdit = input }} defaultValue={this.state.namaDef} className="form-control" type="text" />
                        <h5>Desc</h5>
                        <input ref={(input) => { this.descEdit = input }} defaultValue={this.state.descDef} className="form-control" type="text" />
                        <h5>Price</h5>
                        <input ref={(input) => { this.priceEdit = input }} defaultValue={this.state.priceDef} className="form-control" type="text" />
                        <h5>Picture</h5>
                        <input ref={(input) => { this.pictureEdit = input }} defaultValue={this.state.pictureDef} className="form-control" type="text" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editProduct()}>Edit</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ManageProducts
