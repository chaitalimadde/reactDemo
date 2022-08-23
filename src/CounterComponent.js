import React from "react";

export default class CounterComponent extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            counter :0
        }
        console.log("constructor is called")
        }



componentDidMount(){
console.log("componentDidMount called")
}

static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps called", state);
    return {counter: props.data *2
        
    }
    }

    shouldComponentUpdate() {
        return true;
      }

      getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the counter was " + prevState.counter;
      }

      componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated counter is " + this.state.counter;
        return null
      }

      componentWillUnmount() {
        console.log("The component is about to be unmounted.");
      }

    render(){
        console.log("render() called")
        return<div>
            <h3>CounterComponent called</h3>
            <p >getDerivedStateFromProps {this.state.counter}</p>
            <p id="div1"></p>
            <p id="div2"></p>
        </div>

    }
}