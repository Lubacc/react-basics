import React, { useState, useEffect } from 'react';

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    
    const logMousePosition = (e) => {
        console.log('Mouse event.')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('UseEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component unmount')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])//With the empty array we tell React that this effect depends on nothing so there is no need to call it when re-render

    return (
        <div>
            Hooks x: {x} y: {y}
        </div>
    )
}

export default HookMouse
