import React from 'react';
class Users extends React.Component{

    constructor(props){
super(props)
this.state = {
    name: "Riya"
}
    }

    render(){
    return<div>
        <h2>Users works</h2>
        <p>{this.state.name}</p>
    </div>
    }
}

export default Users;