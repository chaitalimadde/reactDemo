import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import Animals from './Animals';
import Employees from './Employees';
import Birds from './Birds';
import Users from './Users'

const LivingThing =() =>{
    const navigate = useNavigate();
    const animalClicked =() =>{
        navigate('/animal');
    }

    const birdClicked =() =>{
        navigate('/bird');
    }
    
    const userClicked =() =>{
        navigate('/user');
    }
    
    const empClicked =() =>{
        navigate('/employee');
    }
    
    return<div>
     <h2>LivingThing example</h2>
     <button onClick={animalClicked}>Animal</button>
     <button onClick={empClicked}>Employees</button>
     <button onClick={userClicked}>Users</button>
     <button onClick={birdClicked}>Birds</button>

     <Routes>
          <Route path="/animal" element={<Animals />} />
          <Route path="/employee" element={<Employees />} />
          <Route path="/user" element={<Users />} />
          <Route path="/bird" element={<Birds />} />
        </Routes>

    </div>
}

export default LivingThing;