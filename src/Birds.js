import React, { useState } from 'react';

const Birds =() =>{
    const [name, setName] = useState('Peacock');
    return<div>
     <h2>Bird component works</h2>
     <p>{name}</p>
    </div>
}

export default Birds;