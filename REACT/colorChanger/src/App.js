import Square from './Square'
import Input from './Input'
import { useState } from 'react'
import './App.css';

function App() {
const [colorValue, setColor] = useState('');
const [hexValue, setHexValue] = useState('');
const [isDarkText, setDarkText] = useState(true);

return (
  <div className="App">
    <Square 
    colorValue={colorValue} 
    hexValue={hexValue}
    isDarkText={isDarkText}
    />  
  <Input  
    colorValue={colorValue}
    setColor={setColor} 
    hexValue={hexValue}
    setHexValue={setHexValue}
    isDarkText={isDarkText}
    setDarkText={setDarkText}

    /> 
  </div>
);
}

export default App;
