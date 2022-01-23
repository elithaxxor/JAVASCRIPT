import Square from './Square'
import Input from './Input'
import { useState } from 'react'
import './App.css';

function App() {
const [colorValue, setColor] = useState('');
return (
  <div className="App">
    <Square 
    colorValue={colorValue} 
    />  
  <Input  
    colorValue={colorValue}
    setColor={setColor} /> 
  </div>
);
}

export default App;
