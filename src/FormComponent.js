import React from "react";

class FormComponent extends React.Component{

constructor(props){
    super(props);
    this.state={
        name: '',
        dob: '',
        gender: '',
        data: []
    }
}

   handleChange1=(event)=>{
    // event.preventDefault();
        this.setState({name: event.target.value});
}

handleChange2=(event)=>{
    // event.preventDefault();
    this.setState({dob: event.target.value});
    }

    handleChange3=(event)=>{
        // event.preventDefault();
        this.setState({gender: event.target.value});
}

buttonClicked = (e)=>{
    e.preventDefault();
    let items = [...this.state.data];
    // this.setState({
    //    data: this.state.data.push({
    //         name: this.state.name,
    //         dob: this.state.dob,
    //         gender: this.state.gender
    //    })
     items.push({
        name: this.state.name,
        dob: this.state.dob,
        gender: this.state.gender
   })
   this.setState({
    data:items,
    name: '',
    dob: '',
    gender: ''
   })
    //  })
    // });
}

deleteRecord =(index) =>{
    this.setState({
        data:this.state.data.filter(d=>d.name !== index)
    })
}

render(){
    return<div>
<form>
    <input type="text" name="name" placeholder="Enter Name"  onChange={this.handleChange1}/><br /><br />
    <input type='date'
      placeholder='Enter BirthDate'
      name='birthdate' onChange={this.handleChange2}
    /><br /><br />
      <div onChange={this.handleChange3}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
      <button onClick={this.buttonClicked}>Ok</button>
</form> 

<h3>User List table:</h3>
<table >
    <tbody>
    <tr><td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>Name</td><td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>DOB</td><td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>Gender</td></tr>
    
    {this.state.data?.map(item => {
        return(
    <tr key={item.name}><td>{item.name}</td><td>{item.dob}</td><td>{item.gender}</td><td><button onClick={()=>this.deleteRecord(item.name)}>Del</button></td></tr>
        )
})}
    </tbody></table>
    </div>
}
}

export default FormComponent;