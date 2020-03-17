import React, { useState, useEffect } from 'react';

function UseEffectCounter() {

    const initialCount = 0 
    const initialText = ''
    const [count, setCount] = useState(initialCount);
    const [name, setName] = useState(initialText)

    useEffect(() => {
        console.log('Use Effect - updating document title...')
        document.title = `Clicked ${count} times.`
    }, [count]) // In this we put the parameters to watch for instead of comparing prevState

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times.</button>
        </div>
    )
}

export default UseEffectCounter
