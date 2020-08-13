import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


class BooksPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleEdit = () =>{

    }

    handleDelete = () => {

    }
    render() {
        var data = this.props.primaryData.primaryData
        console.log(data)
        return (
            <div className="container-fluid w-75">
                <div>
                    <table class="table table-striped table-light">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Category</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Author</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.category}</td>
                                        <Link to ={`/books/${item.id}`} ><td>{item.title}</td></Link>
                                        <td>{item.price}</td>
                                        <td>{item.author}</td>
                                        <td><button className="btn btn-primary" onClick = {this.handleEdit}>Edit</button></td>
                                        <td><button className="btn btn-primary" onClick = {this.handleDelete}>Delete</button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        primaryData: state.booksReducer
    }
}

export default connect(mapStateToProps)(BooksPage)
