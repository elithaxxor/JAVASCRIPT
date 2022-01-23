import Square from './Square'
import './App.css';


const Input = ({ colorValue, setColor }) => {
return (
  <form onSubmit={(e) => e.preventDefault()}>
  <label> Add Color Name </label>
  <input 
    autoFocus 
    type='text'
    placeholder='add color name '
    required
    value={colorValue}
    onChange={(e)=> setColor(e.target.value)}
  />
  </form>

);
}

export default Input;
