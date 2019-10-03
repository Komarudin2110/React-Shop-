import React, { Component } from 'react'

export class Logout extends Component {
    keluar = () => {
        this.props.LogOut()
    }
    render() {
        return (
            <div>
                <h1 className="text-center mt-5">Terimakasih !</h1>
            </div>
        )
    }
}

export default Logout
