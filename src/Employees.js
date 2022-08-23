import React from 'react';
class Employees extends React.Component{

    constructor(props){
super(props)
this.state = {
    type:'employee',
    empData: []
}
    }

    componentDidMount(){
// fetch('https://dummy.restapiexample.com/api/v1/employees')
fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
.then((res)=>res.json())
.then(emp=>{
    this.setState({
        empData: emp
    })
}
)
console.log(this.state.empData)
    }

    render(){
    return<div>
     <h2>Employees</h2>
     <ul>

                 
                    <table>
                        <tr><td>Empoyee Id</td><td>Emp firstName</td><td>Emp LastName</td><td>Email</td><td>Contact No</td></tr>
                        {this.state.empData.map((emp) => (
                        <tr><td>{emp.id}</td><td>{emp.firstName}</td><td>{emp.lastName}</td><td>{emp.email}</td><td>{emp.contactNumber}</td></tr>
                        ))}
                    </table>

            </ul>
    </div>
    }
}

export default Employees;