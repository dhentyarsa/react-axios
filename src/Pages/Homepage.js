import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { Card, Button, CardTitle, CardText, Row, Col, Table, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Homepage extends Component{
    
    state = {
        data : []
    }

    componentDidMount(){
        Axios.get('http://localhost:2000/users')
        .then((res) => {
            this.setState({data:res.data})
            console.log(res.data)

        })
        .catch((err) => {
            console.log(err)
        })
    }

    contoh = () => {
        Axios.get('http://localhost:2000/users')
        .then((res) => {
            this.setState({data:res.data})
            console.log(res.data)

        })
        .catch((err) => {
            console.log(err)
        })
    }

    // renderUserData = () => {
    //     return this.state.data.map((val) => {
    //         return(
    //                 <Col sm="6">
    //                 <Card body>
    //                     <CardTitle>{val.first_name}</CardTitle>
    //                     <CardText>{val.last_name}</CardText>
    //                     <CardText>{val.email}</CardText>
    //                     <Button>Go somewhere</Button>
    //                 </Card>
    //                 </Col>
    //         )
    //     })
    // }

    renderUserData = () => {
        return this.state.data.map((val,index) => {
            return(
                
                <tbody>
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{val.first_name}</td>
                    <td>{val.last_name}</td>
                    <td>{val.email}</td>
                  </tr>
                </tbody>
            );
          }
          
            )
    }

    submitData = () => {
        var inputfirstname = this.refs.firstname.value
        var inputlastname = this.refs.lastname.value
        var email = this.refs.email.value
        Axios.post('http://localhost:2000/users' , {
            first_name: inputfirstname,
            last_name: inputlastname,
            email: email
        })
        .then((res) => {
            console.log(res.data)
            this.componentDidMount()
            this.refs.firstname.value = ''
            this.refs.lastname.value = ''
            this.refs.email.value = ''
        })
        .catch((err) => {
            console.log(err)
        })

    }

    render(){
        return(
            <div>
                <div className='col-12 m-center'>
                    <center>
                        <h1>
                            This is Home.    
                        </h1>
                    </center>
                </div>
                <Link to='/not-home'>
                    <button className='col-12 btn btn-danger'>
                        to Cat-page
                    </button>
                </Link>
                <center>
                    <button className='col-12 btn btn-success' onClick={this.contoh}>
                        renderUserData
                    </button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Table bordered className="col-6">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                    {this.renderUserData()}
                    </Table>
                </center>
                
                <Form className='text-center'>
                    First Name
                    <br></br>
                    <input className='col-8 container-fluid' type="text" name="first-name" ref="firstname" placeholder="your first name here" />
                    <br></br>
                    Last Name
                    <br></br>
                    <input className='col-8 container-fluid' type="text" name="last-name" ref="lastname" placeholder="your last name here" />
                    <br></br>
                    E-mail
                    <br></br>
                    <input className='col-8 container-fluid m-auto' type="text" name="email" ref="email" placeholder="your e-mail here" />
                    <br></br>                  
                    <Button onClick={this.submitData}>Submit</Button>
                </Form>

            </div>
        )
    }
}

export default Homepage