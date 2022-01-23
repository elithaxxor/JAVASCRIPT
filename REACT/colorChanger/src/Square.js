import Input from './Input'
import './App.css';

const Square = ( {colorValue} ) => {
  return (
    <div className="Square">
        <p> style={{ backgroundColor:colorValue }} </p> 
        <p> {colorValue ? colorValue:"Empty Value"} </p>
    </div>
  );
}

Square.defaultProps={
  colorValue = 'EmptyColorValue---'
}
export default Square;
