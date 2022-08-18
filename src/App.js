// import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';


function App() {
let userDataSet=[
{
  name:'chaitali',
  age: 26,
  gender: 'Female'
},
{
  name:'Rupali',
  age: 28,
  gender: 'Female'
},
{
  name:'Suraj',
  age: 29,
  gender: 'Male'
}
  ];

  return (
    <div className="App">
      <ClassComponent/>
      <FunctionalComponent data={userDataSet}/>
    </div>
  );
}

export default App;
