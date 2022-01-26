import { useState } from 'react';
import App from "./App";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <section className = 'counter'>
            <header className="App-header">
                <h2> Simple REACT COUNTER </h2>
                <h1> {count} </h1>
                <p>
                <button onClick={()=>setCount(count+1)}> + </button>
                <button onClick={()=>setCount(count-1)}> - </button>
                </p>
                <div>
                <button onClick= {() => setCount(0)}> Reset </button>
                </div>
            </header>

            </section>
    )
}

export default Counter;




