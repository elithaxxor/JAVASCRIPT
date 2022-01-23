import Square from './Square'
import './App.css';
import colorNames from 'colornames' // takes the str color and conv to hex 


const Input = ({ colorValue, setColor, hexValue, setHexValue, isDarkText, setDarkText }) => {
return (
  <form onSubmit={(e) => e.preventDefault()}>
  <label> Add Color Name </label>
  <input 
    autoFocus 
    type='text'
    placeholder='add color name '
    required
    value={colorValue}
    onChange={(e)=> { 
      setColor(e.target.value);
      setHexValue(e.target.value);
      setHexValue(colorNames(e.target.value));
    }}/>

  <button 
    type='button'
    onClick={()=> setDarkText(!isDarkText)} /*boolean - on /off  for dark */
    > 
    toggle text color 
  </button>
    </form>
);
}

export default Input;
