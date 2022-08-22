import './App.css';
import ChildComponent from './childComponent';
import React, { useState } from 'react';

function App() {
 

  const [isbuttonClicked, setCounter ] = useState(0);

  function handleChange(newValue) {
    setCounter(newValue);
  }
  
  return (
    <div className="App">
              <h2>Counter Value is:{isbuttonClicked}</h2>
        <ChildComponent  onChange={handleChange}  isbuttonClicked ={isbuttonClicked}/>
    </div>
  );
}

export default App;
