import React from "react";
import { connect } from "react-redux";
import { getData } from "./actions/index";
import Table from 'react-bootstrap/Table';

export class Post extends React.Component{

    componentDidMount(){
        this.props.getData();
    }

    render(){
        return<div>
    <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
        

{ this.props?.articles?

this.props?.articles?.map(( i, index ) => {
  return (
    <tr key={index}>
      <td>{i.id}</td>
      <td>{i.first_name}</td>
      <td>{i.last_name}</td>
      <td>{i.email}</td>
    </tr>
  );
}) : <p>No Data</p>
    }
  
          </tbody>
        </Table>
        </div>
    }
}

function mapStateToProps(state){
return{
    articles:state.postReducer.remoteArticle.slice(0,10)
}
}


function mapDispatchToProps(dispatch){
    return{
        getData: ()=>dispatch(getData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);