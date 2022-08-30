import './App.css';
import React from 'react';
import EmploeeForm from './EmployeeForm';
import Counter from './Counter';
import Post from './Post';

const App =() => {

  return (
    <div>
      <h1>Counter Example</h1>
   <Counter />
   <h1>Employee Data example</h1>
  <EmploeeForm />
  <h1>Thunk example</h1>
  <Post />
        </div>
  );
}

export default App;

