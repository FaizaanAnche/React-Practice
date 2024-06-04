import './App.css';
import { useState } from 'react';
import MyButton from './components/MyButton';
import ProductList from './components/ProductList';
import Profile from './components/Profile';
import Card from './components/Card';
import Student from './components/Student';
import ObjectList from './components/ObjectList';
import Picture from './components/Picture';
import Counter from './components/Counter';
import Inputs from './components/Inputs';
import ColorPicker from './components/ColorPicker';
import UpdateObjects from './components/UpdateObjects';
import UpdateArrays from './components/UpdateArrays';
import ArrayOfObjects from './components/ArrayOfObjects';

function App() {
  let [count, setCount] = useState(0);

  const objectsArray = [
    { id:"1"  ,name:"Object 1", property: "value 1"},
    { id:"2"  ,name:"Object 2", property: "value 2"},
    { id:"3"  ,name:"Object 3", property: "value 3"},
    { id:"4"  ,name:"Object 4", property: "value 4"}
];

  function handleClick(){
      setCount(++count);
  }
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <Profile/>
      <ProductList/>
      <div className='card-container'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <Student name="Faizaan" age={22} isStudent={true}/>
      <Student name="Faizaan" age="22" isStudent={true}/>
      <Student name="Faizaan"/>
      <Student/>
      <ObjectList items={objectsArray} title="Object List"/>
      <Picture/>
      <Counter/>
      <Inputs/>
      <ColorPicker/>
      <UpdateObjects/>
      <UpdateArrays/>
      <ArrayOfObjects/>
    </div>
  );
}

export default App;

