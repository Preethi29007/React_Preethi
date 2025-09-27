import { useState } from "react";

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);
    const reset = () => setCount(initialValue);
    const trim=(value)=>value.toString().trim();
    const split=(value)=>value.split(/\s+/)
    return { count, increment, decrement, reset,trim,split };
}

export default useCounter;