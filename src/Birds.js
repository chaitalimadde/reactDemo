import React from 'react';

class Birds extends React.Component{

    constructor(props){
super(props)
this.state = {
    name: "Peacock"
}
    }

    render(){
    return<div>
     <h2>Bird component works</h2>
     <p>{this.state.name}</p>
    </div>
}
}

export default Birds;