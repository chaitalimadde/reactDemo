import './App.css';
import React from 'react';
import CounterComponent from './CounterComponent';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        counter :0
    }
    }
  render(){
  return (
    <div>
    <h1>Increment counter example</h1>
    <p>{this.state.counter}</p>
    <button onClick={()=>{this.setState({counter: this.state.counter +1})}}>Click me</button>
    <CounterComponent  data={this.state.counter}/>
            </div>
  );
  }
}

