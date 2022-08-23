import React from 'react';

class Animals extends React.Component{

    constructor(props){
super(props)
this.state = {
    name: "Tiger"
}
    }

    render(){
    return<div>
     <h2>Animal component works</h2>
     <p>{this.state.name}</p>
    </div>
    }
}

export default Animals;