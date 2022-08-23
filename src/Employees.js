import React from 'react';
class Employees extends React.Component{

    constructor(props){
super(props)
this.state = {
    name: "Pihu"
}
    }

    render(){
    return<div>
     <h2>Employee component works</h2>
     <p>{this.state.name}</p>
    </div>
    }
}

export default Employees;