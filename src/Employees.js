import React, { Component, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

class Employees  extends React.Component{
  componentDidMount() {
      console.log(this.props)
  }

  render(){
    const loadData = this.props?.empData;
    return (
        <div>    
    <h1>Employees Data</h1>
{this.props.empData ?
<h1>{this.props.empData.map(i=><div>{i.name}</div>)}</h1> : <p>NO value</p>
  }
  
    <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
        

{this.props.empData ?
this.props.empData.map(( i, index ) => {
  return (
    <tr key={index}>
      <td>{i.id}</td>
      <td>{i.name}</td>
      <td>{i.age}</td>
      <td>{i.gender}</td>
      <td>{i.company}</td>
    </tr>
  );
}) : <p>No Data</p>
  }
           
  
          
          </tbody>
        </Table>
 
        </div>

      );
    }
  }


function mapStateToProps(state) {
  if(state.saveData.empData){
  const  data  = state.saveData.empData;
  return { empData: data }
  }
 
}

export default connect(
 mapStateToProps , null)(Employees);