// import logo from './logo.svg';
import './App.css';
import Lion from './Animals/Lion';
import Tiger from './Animals/Tiger';
import Bear from './Animals/Bear';
import Zebra from './Animals/Zebra';
import Panda from './Animals/Panda';
import Deer from './Animals/Deer';
import Bat from './Birds/Bat';
import Bee from './Birds/Bee';
import Duckling from './Birds/Duckling';
import Peacock from './Birds/Peacock';
import Penguin from './Birds/Penguin';
import Pigeon from './Birds/Pigeon';


function App() {
  return (
    <div className="App">
      <h3>Below are animal class component:</h3>
      <Lion></Lion>
      <Tiger></Tiger>
      <Bear></Bear>
      <Zebra></Zebra>
      <Panda></Panda>
      <Deer></Deer>
      <h3>Below are bird functional component:</h3>
      <Bat></Bat>
      <Bee></Bee>
      <Duckling></Duckling>
      <Peacock></Peacock>
      <Penguin></Penguin>
      <Pigeon></Pigeon>
    </div>
  );
}

export default App;
