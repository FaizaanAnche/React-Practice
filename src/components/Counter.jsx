import { useState } from "react";

const Counter = () => {

    let [count ,setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="box">
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={() => increment()}>increment</button>
            <button onClick={() => decrement()}>decrement</button>
            <button onClick={() => reset()}>reset</button>
        </div>

    );

}

export default Counter;