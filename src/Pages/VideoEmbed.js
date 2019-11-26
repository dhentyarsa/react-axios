import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class vidpage extends Component{
    render(){
        return(
            <div >
                <div className='col-12 m-auto'>
                    <center>
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen width='100%' height='700px'></iframe> */}
                    </center>
                </div>
                <Link to='/'>
                    <button className='col-12 btn btn-success'>
                        to Homepage
                    </button>
                </Link>
            </div>
        )
    }
}

export default vidpage