import { useState, useReducer, useEffect } from "react";
import Digit from "./components/Digit";
import Operation from "./components/Operation";
import "./styles.css";
//import ACTIONS from "./components/ACTIONS";

// remember to call values with 'state' --> the values are dicts
export const ACTIONS = {
  ADD: "add",
  CHOOSE_OPERATION: "choose",
  CLEAR: "clear",
  DEL: "del",
  EVAL: "eval"
};

function reducer(state, { type, payload }) {
  try{

    console.log("user inpupt: ", payload);
    console.log("current state: ", state);
    // try just actrion if it does not work
    switch (type) {
      case "ACTIONS.ADD":
        // logic to set up '0' placeholder and (.)decimimal. that way numbers follow porper after declaring decimal / 0
        console.log(typeof(state.currentOperand)); // should return a list-object. 
        if (payload.digit === "0" && state.currentOperand === "0") return state;
        if (payload.digit === "." && state.currentOperand.incldues(".")) return state;
        //if (payload.digit === "." && state.currentOperand === ".") return state;
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`
        };
      default:
        return state;
    }
  }    catch(err){
    console.log('error in reducer function', err);
  }
}
// DIPATCH CALLS ACTIONS (defined above), which provides logic for calculations as well as display property
// ie: '.' and '0', where logic sets values to corrosping placeholders 
// the reducers function will work on an object, with the digits to calculated, operands and previous # being variables
// all of these will be calculated via reducer rather than useState / setState.

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  //dispatch({ type: ACTIONS.ADD, payload: { digit: 1 } });
// THE DELETE AND CLEAR BUTTONS DO NOT HAVE MUCH LOGIC, SO THE ONNCLICK IS DIFFERNT TAHN THE DIGIT huttons 

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      
      <button 
        className="span-two"
        {onClick=() => {dispatch ({ type: ACTIONS.DEL })} >
          del 
      </button> 


      <Operation> "/" </Operation>
      <Digit digit="1" dispatch={dispatch} />
      <Digit digit="2" dispatch={dispatch} />
      <Digit digit="3" dispatch={dispatch} />
      <Digit digit="4" dispatch={dispatch} />
      <Digit digit="5" dispatch={dispatch} />
      <Digit digit="6" dispatch={dispatch} />
      <Digit digit="7" dispatch={dispatch} />
      <Digit digit="8" dispatch={dispatch} />
      <Digit digit="9" dispatch={dispatch} />
      <Digit digit="0" dispatch={dispatch} />
      <Operation> "-" </Operation>
      <Operation> "+" </Operation>
      <Operation> "=" </Operation>

      <button className="span-two"> </button>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
      </button>

      </div>
  
  );
}

export default App;
