import React from 'react'
import { useState } from 'react'

const Counter = () => {
    // declarar un estado
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Total: {counter}</h1>
            <button 
            className="border p-2 mt-2 rounded-full"
            onClick={() => { setCounter(counter + 1)}}
            >Incrementar</button>
        </div>
    )
}

export default Counter