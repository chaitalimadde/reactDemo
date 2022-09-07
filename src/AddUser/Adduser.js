import '../ListUser/ListUser.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React from 'react';

const Adduser= ()=>{
    const textInput1 = React.useRef();
    const textInput2 = React.useRef();

    const addUserData =(event) =>{
        event.preventDefault()
       let name = event.target.elements.username.value;
       let pass = event.target.elements.password.value;

       const obj = {
        "email": name,
        "password": pass
    }

    let newLine = "\r\n"
    let  msg = "Record added successfully..!"
    msg += newLine;
   

       axios.post('https://reqres.in/api/register', obj)
       .then(response=>{
        msg += "token =" +response.data.token
         alert(msg );
       })
       .catch(err=>{
             alert("There is some error")
           }
       )

    }


    const clickReset= () =>{
        textInput1.current.value = "";
        textInput2.current.value = "";
    }


    return<div className="color">
       <h3>Add User</h3>
       <form onSubmit={addUserData}>
  <div className="form-group row ">
    <div className="col-sm-10">
      <input type="text" className="form-control " name="username"  placeholder='Username' ref={textInput1}/>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <input type="text" className="form-control" name="password" placeholder='Password'  ref={textInput2}/>
    </div>
  </div>
<div className='col-sm-2'>
  <Button variant="primary" type="submit">Add User</Button>{' '}
  <Button variant="secondary"  onClick={clickReset}>Reset</Button>{' '}
  </div>
  </form>
    </div>
}

export default Adduser;