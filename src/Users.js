import React, { useState } from 'react';
const Users =() =>{
    const [name, setName] = useState('Suraj');
    return<div>
        <h2>Users works</h2>
        <p>{name}</p>
    </div>
}

export default Users;