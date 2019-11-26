import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class notHome extends Component{
    render(){
        return(
            <div >
                <div class='col-12 m-auto'>
                    <center>
                        <h1>
                            Wiggle-wiggle.a
                            
                        </h1>
                        <img src='https://31.media.tumblr.com/a9d6b265d1f45ce6308ee680cfd2049f/tumblr_ne9n48NBbg1tzms7wo1_400.gif' alt='cat-gif' width='50%' height='50%'></img>
                    </center>
                </div>
                <Link to='/'>
                    <button class='col-12 btn btn-success'>
                        to Homepage
                    </button>
                </Link>
            </div>
        )
    }
}

export default notHome