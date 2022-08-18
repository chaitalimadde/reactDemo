import React from 'react';

class ClassComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name: "chaitu"
        }
    }

    handleClick(){
        this.setState({
        name : "Suraj"
        })
    }

    render(){
        return <div><h3>Class component using state</h3><h3>Name is : {this.state.name}</h3>
        <button onClick={()=>this.handleClick()}>Click me</button></div>
    }
}

export default ClassComponent;