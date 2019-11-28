import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { Button, Table, Form, Input } from 'reactstrap';
import DataCard from '../components/card'
import DataDropdown from '../components/datadropdown'
import DropdownMain from '../components/dropdown'
import { connect } from 'react-redux';
import { add, minus} from '../redux/action/countAction';

class Homepage extends Component{
    
    state = {
        data : [],
        selectedId : null
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
            if(this.state.selectedId === val.id){
                return(
                    <tbody>
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>
                            <Input type='text' innerRef={(newfirstnameEdit) => this.newfirstnameEdit = newfirstnameEdit} placeholder='First Name'></Input>
                        </td>
                        <td>
                            <Input type='text' innerRef={(newlastnameEdit) => this.newlastnameEdit = newlastnameEdit} placeholder='Last Name'></Input>
                        </td>
                        <td>
                            <Input type='text' innerRef={(newemailEdit) => this.newemailEdit = newemailEdit} placeholder='E-mail'></Input>
                        </td>
                        <td>
                            <center>
                                <td>
                                    <Button color='success' onClick = {() => {this.confirmEdit(val.id)}}>
                                        Confirm
                                    </Button>
                                </td>
                                <td>
                                    <Button color='secondary' onClick = {() => {this.cancelEdit(val.id)}}>
                                        Cancel
                                    </Button>
                                </td>
                            </center>
                        </td>
                    </tr>
                    </tbody>
                )
                }else{
                    return(
                        
                        <tbody>
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{val.first_name}</td>
                            <td>{val.last_name}</td>
                            <td>{val.email}</td>
                            <td>
                                <center>
                                    <td>
                                        <Button color='primary' onClick = {() => {this.editData(val.id)}}>
                                            Edit
                                        </Button>
                                    </td>
                                    <td>
                                        <Button color='danger' onClick = {() => {this.removeData(val.id)}}>
                                            Delete
                                        </Button>
                                    </td>
                                </center>
                            </td>
                        </tr>
                        </tbody>
                    )
            }
        })
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
            // this.componentDidMount()
            Axios.get('http://localhost:2000/users')
            .then((res) =>{
                this.setState({data: res.data})
                this.refs.firstname.value = ''
                this.refs.lastname.value = ''
                this.refs.email.value = ''
            })
        })
        .catch((err) => {
            console.log(err)
        })

    }

    removeData = (a) => {
        var url = `http://localhost:2000/users/${a}`
        Axios.delete(url)
        .then((res) => {
            console.log(res.data)
            // this.componentDidMount()
            Axios.get('http://localhost:2000/users')
            .then((res) =>{
                this.setState({data: res.data})
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    editData = (id) => {
        this.setState({selectedId: id})
        console.log(this.state.selectedId)
           
        }

    confirmEdit = (id) => {
        var inputfirstname = this.newfirstnameEdit.value
        var inputlastname = this.newlastnameEdit.value
        var email = this.newemailEdit.value

        if(this.newfirstnameEdit.value === ''){
            inputfirstname = this.state.data[id-1].first_name
        }
        if(this.newlastnameEdit.value === ''){
            inputlastname = this.state.data[id-1].last_name
        }
        if(this.newemailEdit.value === ''){
            email = this.state.data[id-1].email
        }
        Axios.put(`http://localhost:2000/users/${id}` , {
            first_name: inputfirstname,
            last_name: inputlastname,
            email: email
        })
        .then((res) => {
            // this.componentDidMount()
            Axios.get('http://localhost:2000/users')
            .then((res) =>{
                this.setState({data: res.data})
                this.setState({selectedId: null})
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    cancelEdit = () => {
        Axios.get('http://localhost:2000/users')
        .then((res) => {
            this.setState({data:res.data})
            this.setState({selectedId: null})

        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderCard = () => {
        return this.state.data.map((val) => {
            return(
                    <DataCard firstname={val.first_name} lastname={val.last_name} email={val.email}></DataCard>
            )
        })
    }

    renderDropdown = () => {
        return this.state.data.map((val) => {
            return(
                    <DataDropdown firstname={val.first_name} lastname={val.last_name} email={val.email}></DataDropdown>
            )
        })
    }

    renderDropdownMain = () => {
            return(
                    <DropdownMain renderddown={this.renderDropdown()}></DropdownMain>
            )
    }

    render(){
        console.log(this.props.count)
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
                    <Table bordered className="col-10">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th >E-mail</th>
                                <th>
                                    <center>
                                    Action
                                    </center>
                                </th>
                            </tr>
                        </thead>
                    {this.renderUserData()}
                    </Table>
                </center>
                <center>
                        {this.renderCard()}
                        <br></br>
                        <center>
                            {this.renderDropdownMain()}
                        </center>
                </center>
                <br></br>
                <br></br>
                <Form className='text-center'>
                    <h3>Submit your Data below!</h3>
                    <br></br>
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
                    <br></br>                  
                    <Button onClick={this.submitData}>Submit</Button>
                </Form>
                <br></br>
                <center>
                    <Button onClick = {this.props.minus}>
                        -
                    </Button>
                    {this.props.count}
                    <Button onClick = {this.props.add}>
                        +
                    </Button>
                </center>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        count: state.count.count
    }
}

export default connect(mapStatetoProps, { add,minus })(Homepage)