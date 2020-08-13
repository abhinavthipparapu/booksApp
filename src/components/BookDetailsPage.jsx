import React, { Component } from 'react'
import { connect } from 'react-redux';

class BookDetailsPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            booksData : "data"
        }
    }

    render() {
        var disp = this.props.primaryData.primaryData
        var id = this.props.match.params.id
        var displayData
        console.log(disp)
        {
            for(var i=0;i<disp.length;i++){
                if(disp[i].id == id){
                    displayData = disp[i]
                }
            }
        }
        return (
            <div className='w-75 container-fluid' style={{border:"1px solid black"}}>
                <div className="row m-2 p-3">
                    <div className="col-4">Title</div>
                    <div className="col-8">{displayData.title}</div>
                </div>
                <div className="row m-2 p-3">
                    <div className="col-4">Author</div>
                    <div className="col-8">{displayData.author}</div>
                </div>
                <div className="row m-2 p-3">
                    <div className="col-4">Price</div>
                    <div className="col-8">{displayData.price}</div>
                </div>
                <div className="row m-2 p-3">
                    <div className="col-4">Category</div>
                    <div className="col-8">{displayData.category}</div>
                </div>
                <div className="row m-2 p-3">
                    <div className="col-4">Description</div>
                    <div className="col-8"> {displayData.despcription}</div>
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

export default connect(mapStateToProps)(BookDetailsPage)