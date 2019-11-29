import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { add, minus, login} from '../redux/action';
import { Button, Input } from 'reactstrap';
import Axios from 'axios';

class notHome extends Component{
    loginUser = () => {
        let username = this.text.value
        let password = this.pass.value
        if(username === '' || password === ''){
            alert('Fill all of the forms')
        }else{
            Axios.get(`http://localhost:2000/Login?username=${username}&${password}`, {
                username,
                password
            })
            .then((res) => {
                if(res.data.length === 0){
                    alert('Invalid Username and/or Password')
                }else{
                    console.log(res.data)
                    this.props.login(res.data[0])
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
        this.text.value = ''
        this.pass.value = ''
    }
    render(){
        return(
            <div>
                {/* <div className='col-12 m-auto'> */}
                    {/* <center> */}
                        {/* <h1> */}
                            {/* Wiggle-wiggle. */}
                        {/* </h1> */}
                        {/* <img src='https://31.media.tumblr.com/a9d6b265d1f45ce6308ee680cfd2049f/tumblr_ne9n48NBbg1tzms7wo1_400.gif' alt='cat-gif' width='50%' height='50%'></img> */}
                    {/* </center> */}
                {/* </div> */}
                {/* <Link to='/'>
                    <button className='col-12 btn btn-success'>
                        to Homepage
                    </button>
                </Link> */}
                <center>
                    {/* <Button onClick = {this.props.minus}>
                        -
                    </Button>
                    {this.props.count}
                    <Button onClick = {this.props.add}>
                        +
                    </Button> */}
                    <div className='justify-content-center'>
                        {this.props.username}
                        <Input type='text' innerRef={(text) => this.text = text} placeholder="USERNAME"/>
                        <Input type='password' innerRef={(pass) => this.pass = pass} placeholder="PASSWORD"/>
                        <Button onClick={this.loginUser}>
                            Click Me!
                        </Button>
                    </div>
                </center>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        count: state.count.count,
        username: state.user.username
    }
}

export default connect(mapStatetoProps, { add,minus,login })(notHome)