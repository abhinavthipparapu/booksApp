import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="container-fluid w-75" >
                <div style={{backgroundImage : "url(" + "https://i.ytimg.com/vi/wznpt34QeyE/maxresdefault.jpg"+")",height:"850px",width:"1300px"}}>
                    <button type="button" class="btn btn-dark m-5 p-3">
                    <Link to='/books' className='text-muted text-decoration-none'>
                        Explore More
                    </Link>
                    </button>
                </div>
                
            </div>
        )
    }
}
