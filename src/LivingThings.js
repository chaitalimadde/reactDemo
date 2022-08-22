import React from 'react';
import Animals from './Animals';
import * as ReactDOM from 'react-dom';
import Users from './Users';
import Employees from './Employees';
import Birds from './Birds';
// import createRoot from 'react-dom';

export default class LivingThings extends React.Component { 

    animalClicked(){
    ReactDOM.render(<Animals />, document.getElementById('animals'));
    }

    UnmountAnimalData(){
        ReactDOM.unmountComponentAtNode(document.getElementById("animals"));
    }

    userClicked(){
        ReactDOM.render(<Users />, document.getElementById('users'));
    }

    UnmountUserData(){
        ReactDOM.unmountComponentAtNode(document.getElementById("users"));
    }

    employeeClicked(){
        ReactDOM.render(<Employees />, document.getElementById('employee'));
    }

    UnmountEmployeeData(){
        ReactDOM.unmountComponentAtNode(document.getElementById("employee"));
    }

    birdsClicked(){
        ReactDOM.render(<Birds />, document.getElementById('birds'));
    }

    UnmountBirdsData(){
        ReactDOM.unmountComponentAtNode(document.getElementById("birds"));
    }
    
    render(){
    return(
        <div>
        <h2>Render Animal Data</h2>
        <button onClick={this.animalClicked}>Render</button>
        <div id="animals"></div>
        <h2>Unmount Animal Data</h2>
        <button onClick={this.UnmountAnimalData}>Unmount</button>
        <br />

        <h2>Render User Data</h2>
        <button onClick={this.userClicked}>Render</button>
        <div id="users"></div>
        <h2>Unmount User Data</h2>
        <button onClick={this.UnmountUserData}>Unmount</button>
        <br />

        <h2>Render Employee Data</h2>
        <button onClick={this.employeeClicked}>Render</button>
        <div id="employee"></div>
        <h2>Unmount Employee Data</h2>
        <button onClick={this.UnmountEmployeeData}>Unmount</button>
        <br />

        <h2>Render Birds Data</h2>
        <button onClick={this.birdsClicked}>Render</button>
        <div id="birds"></div>
        <h2>Unmount Birds Data</h2>
        <button onClick={this.UnmountBirdsData}>Unmount</button>
        <br />
        </div>
    )
    }
}