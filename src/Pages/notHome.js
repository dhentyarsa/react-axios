import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { add, minus} from '../redux/action/countAction';
import { Button } from 'reactstrap';

class notHome extends Component{
    render(){
        console.log(this.props.count)
        return(
            <div >
                <div className='col-12 m-auto'>
                    <center>
                        <h1>
                            {/* Wiggle-wiggle. */}
                        </h1>
                        {/* <img src='https://31.media.tumblr.com/a9d6b265d1f45ce6308ee680cfd2049f/tumblr_ne9n48NBbg1tzms7wo1_400.gif' alt='cat-gif' width='50%' height='50%'></img> */}
                    </center>
                </div>
                <Link to='/'>
                    <button className='col-12 btn btn-success'>
                        to Homepage
                    </button>
                </Link>
                <Button onClick = {this.props.minus}>
                    -
                </Button>
                {this.props.count}
                <Button onClick = {this.props.add}>
                    +
                </Button>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        count: state.count.count
    }
}

export default connect(mapStatetoProps, { add,minus })(notHome)