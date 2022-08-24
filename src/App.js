import './App.css';
import React from 'react';
import FormComponent from './FormComponent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showEmpComponent: false,
      showPhotosComponent: false,
    };
  }


  render(){
  return (
    <div>

        <FormComponent />
        </div>
  );}
}

export default App;

