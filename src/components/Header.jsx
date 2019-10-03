import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { LogOut } from '../actions/index'
import Swal from 'sweetalert2'

export class Header extends Component {

    // Logout Function 
    exit = () => {
        this.props.LogOut()
        Swal.fire(
            'LogOut Berhasil ',
            'Bye !',
            'success'
        )
    }


    state = {
        isOpen: false
    };
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    // Function untuk merender navbar
    renderNavigation = () => {
        if (!this.props.getUsername) {
            return (    
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/" className="nav-link mx-2">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/" className="nav-link mx-2">All Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/register" className="nav-link mx-2">Register</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/login" className="nav-link mx-2">Login</NavLink>
                    </NavItem>
                </Nav>
            )
        } else {
            return (
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/" className="nav-link mx-2">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/" className="nav-link mx-2">All Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <UncontrolledDropdown className='mt-1'>
                            <DropdownToggle caret className="ml-4 bg-primary border-primary btn-md">
                                Hello, {this.props.getUsername}
                            </DropdownToggle>
                            <DropdownMenu>
                                <NavLink to='/ManageProducts' className="dropdown-item">Manage Products</NavLink>
                                <DropdownItem divider />
                                <NavLink to='/' className="dropdown-item" onClick={this.exit}>Logout</NavLink>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </NavItem>
                </Nav>

            )
        }

    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <div className="container">
                        <Link to="/login" className="navbar-brand">Reactstrap</Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            {this.renderNavigation()}
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}


// Untuk mengambil data dari state Redux
let mapStateToProps = (state) => {
    return {
        getUsername: state.auth.username
    }
}

export default connect(mapStateToProps, { LogOut })(Header)
