import React, { useState } from 'react';

const Animals =() =>{
const [name, setName] = useState('Tiger');

    return<div>
     <h2>Animal component works</h2>
     <p>{name}</p>
    </div>
}

export default Animals;