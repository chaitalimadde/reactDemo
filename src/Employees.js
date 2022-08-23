import React, { useState } from 'react';
const Employees =() =>{
    const [name, setName] = useState('Chaitali');
    return<div>
     <h2>Employee component works</h2>
     <p>{name}</p>
    </div>
}

export default Employees;