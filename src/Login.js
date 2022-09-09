
import React from "react";
import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login =()=>{
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emptyName, setEmptyName] = useState(false);
    const [emptyPass, setEmptyPass] = useState(false);
    const [token, setToken] = useState('');
    const [invalidUser, setInvalidUser] = useState(false);

    const navigate = useNavigate();
     
    const Cancel = ()=>{
       setUsername('');
       setPassword('');
       setEmptyName(false);
       setEmptyPass(false);
       setToken('');
       setInvalidUser(false);
    }
    
     const Login = async() =>{
          if(name === ''){
             setEmptyName(true);
          }
          if(password === ''){
            setEmptyPass(true);
         }
        const obj = {
            "email": name,
            "password": password
        }
        axios.post('https://reqres.in/api/login', obj)
        .then(response=>{
            setToken(response.data.token);
                 localStorage.setItem('token', JSON.stringify(response.data));
                 navigate("/home");
        })
        .catch(err=>{
               if(err.response.data.error === 'user not found')
               setInvalidUser(true);
            }
        )
      }

    const setName = (val)=>{
        if(val === ''){
            setEmptyName(true);
        }else{
            setUsername(val) ;
            setEmptyName(false);
        }
    }

    const setPass = (val)=>{
        if(val === ''){
            setEmptyPass(true);
        }else{
            setPassword(val) ;
            setEmptyPass(false);
        }
    }

        return (
            <div className="card shadow">
            <form>

                <h3 className="title">YMS</h3>
                <div className="form-group col-lg-5 d-flex justify-content-center align-items-center mx-auto">
                <input type="text" className="form-control" placeholder="Username"  onChange={e=>setName(e.target.value)} />
                </div>
                {emptyName && <div className="" style={{ color: 'red' }}> Please enter userName </div>}
                <div className="form-group col-lg-5 m-4 d-flex justify-content-center align-items-center mx-auto">
                <input type="text" className="form-control" placeholder="Password"  onChange={ e => setPass(e.target.value) } />
                </div>
                {emptyPass && <div className="" style={{ color: 'red' }}> Please enter Password </div>}
                {invalidUser && <div className="" style={{ color: 'red' }}> Invalid username/password</div>}
                <button type="button" className="btn btn-primary m-4" onClick={Login}>Login</button>
                <button type="button" className="btn btn-secondary" onClick={Cancel}>Cancel</button>
                <p style={{fontWeight: 'bold'}}>OR</p>
                <div className="btn-group-vertical">
                <button type="button" className="btn-group m-2 border-primary fb" >Login With Facebook</button>
                <button type="button" className="btn-group m-2 border-primary google" >Login With Google</button>
               
                </div>
            </form>
            </div>
        );
        
}



export default Login;