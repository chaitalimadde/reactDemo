import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import saveEmpData from './actions/index';
import Employees from './Employees';
import * as ReactDOM from 'react-dom';

class EmploeeForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            age: '',
            gender: '',
            company: '',
            data: []
        }
    }

    IDClick = (e)=>{
        this.setState({id: e.target.value})
    }

    nameClick = (e)=>{
        this.setState({
            name: e.target.value
        })
    }

    ageClick = (e)=>{
        this.setState({
            age: e.target.value
        })
    }

    genderClick = (e)=>{
        this.setState({
            gender: e.target.value
        })
    }

    companyClick = (e)=>{
        this.setState({
            company: e.target.value
        })
    }


    saveData =(e) =>{

        e.preventDefault();
        let items = [...this.state.data];
        items.push({
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender,
            company: this.state.company,
       }
       )
    
       this.setState({
        data:items,
        name: '',
        age: '',
        gender: '',
        company: '',
        id: ''
       })
       this.props.saveEmpData('SAVE');
       this.props.saveEmpData({'empData':items})
      
    }


    render(){
    return<div>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>Email Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Id" onChange={this.IDClick}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={this.nameClick} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" onChange={this.ageClick}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="Enter Gender" onChange={this.ageClick}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCompany">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Enter Company" onChange={this.companyClick}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={this.saveData}>
        Save
      </Button>
    </Form>
   <Employees />
    </div>
    }
    

}
let mapDispatchToProps =(dispatch)=>{
    return {
        saveEmpData:data=>dispatch(saveEmpData(data))
    }
}


export default connect(
    null,mapDispatchToProps, )(EmploeeForm)