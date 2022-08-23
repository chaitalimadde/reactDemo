import './App.css';
import React from 'react';
// import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import LivingThing from './LivingThing';

const App =()=> {
 
 
  return (
    <div>
      
      {/* <nav>
<Link to="">Dashboard</Link>
<Link to="/home">Home</Link>
<Link to="/contact">Contact</Link>
</nav>
<Routes>
<Route exact path="" element={<Dashboard />}/>
<Route exact path="/home" element={<Home />} />
<Route exact path="/contact" element={<Contact />} />
</Routes> */}
   <LivingThing />
            </div>
  );
}

export default App;

