import React from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

class AsyncAwait extends React.Component {
    constructor(props){
        super(props);
        this.state={
            postData:[]
        }
    }

    componentDidMount(){
        this.getData()
    }

async getData(){
        
let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.setState({
        postData: res.data
    })
  
}
    render() {
      return <div><h1>This is Promise Example</h1>;
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>UserID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
      {this.state.postData ?
this.state.postData.map(( i, index ) => {
  return (
    <tr key={index}>
      <td>{i.id}</td>
      <td>{i.userId}</td>
      <td>{i.title}</td>
      <td>{i.body}</td>
    </tr>
  );
}) : <p>No Data</p>
  }
        </tbody>
    </Table>

    </div>
    }
  }

  export default AsyncAwait;