import React from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

class Promises extends React.Component {

    constructor(props){
        super(props);
        this.state={
            userData:[]
        }
    }

    componentDidMount(){
let promise = axios.get("https://jsonplaceholder.typicode.com/users")

promise.then(response=>{
    console.log(response);
    this.setState({
        userData: response.data
    })
  
}).catch((err)=>{
    console.log(err)
})
    }

    render() {
      return <div><h1>This is Promise Example</h1>;
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIl</th>
          <th>COMPANY</th>
        </tr>
      </thead>
      <tbody>
      {this.state.userData ?
this.state.userData.map(( i, index ) => {
  return (
    <tr key={index}>
      <td>{i.id}</td>
      <td>{i.name}</td>
      <td>{i.email}</td>
      <td>{i.company.name}</td>
    </tr>
  );
}) : <p>No Data</p>
  }
        </tbody>
    </Table>

    </div>
    }
  }

  export default Promises;