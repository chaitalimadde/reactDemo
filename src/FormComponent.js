import React from "react";

class FormComponent extends React.Component{

constructor(props){
    super(props);
    this.state={
        data: []
    }
}

componentDidMount(){
    fetch("https://reqres.in/api/users?page=2")
    .then((response) => response.json())
    .then(item => {
        this.setState({ data: item });
    });
}



render(){
    return<div>

<h3>User List table:</h3>
<table >
    <tbody>
    <tr><td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>First Name</td><td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>Last Name</td><td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>Email</td></tr>
    
    {this.state.data?.data?.map(item => {
        return(
    <tr><td>{item.first_name}</td><td>{item.last_name}</td><td>{item.email}</td></tr>
        )
})}
    </tbody></table>
    </div>
}
}

export default FormComponent;