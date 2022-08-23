import './App.css';
import React from 'react';
import Employees from './Employees';
import * as Reactdom from 'react-dom'
import Photos from './Photos';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showEmpComponent: false,
      showPhotosComponent: false,
    };
  }

  photosClicked =() =>{
this.setState({
  showPhotosComponent: true
})
  }

  empClicked =() =>{
    this.setState({
      showEmpComponent: true
    })
      }

  render(){
  return (
    <div>
        {/* <Employees/> */}  
        <button onClick={this.empClicked}>Show Empoyee Data</button>
        {this.state.showEmpComponent ?
        <Employees />: null}
        <button onClick={this.photosClicked}>Show Photos</button>
        {this.state.showPhotosComponent ?
        <Photos />: null}
        
        </div>
  );}
}

export default App;

