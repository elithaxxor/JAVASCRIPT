import Input from './Input'
import './App.css';

const Square = ( { colorValue, hexValue, isDarkText } ) => {
  return (
    <section 
    className="Square"
    style = {{
    backgroundColor: colorValue, 
    color: isDarkText ? "#000":"#FFF" }}>  
    <p> {colorValue ? colorValue:"Empty Value"} </p>
    <p> {hexValue ? hexValue:null} </p>
    </section>
  );
    }
Square.defaultProps={
  colorValue : 'EmptyColorValue---' }

export default Square;
