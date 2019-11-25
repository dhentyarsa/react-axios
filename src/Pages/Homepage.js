import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Homepage extends Component{
    render(){
        return(
            <div>
                <div class='col-12 m-center'>
                    <center>
                        <h1>
                            This is Home.    
                        </h1>
                    </center>
                </div>
                <Link to='/not-home'>
                    <button class='col-12 btn btn-danger'>
                        to Cat-page
                    </button>
                </Link>
            </div>
        )
    }
}

export default Homepage