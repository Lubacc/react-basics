import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0) //Destructoring the method  - it takes the initial state and returns the current + method to change the state

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    )
}

export default HookCounter
