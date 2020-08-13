import React, { Component } from 'react'

export default class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Books</a>
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">Explore More books</a>
                    <a class="nav-item nav-link" href="#">Benifits</a>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                </nav>
            </div >
        )
    }
}
