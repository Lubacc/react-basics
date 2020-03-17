import React, { useState } from 'react';

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <div>
            <form>
                <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
                <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
                <h2>Your first name is : {name.firstName}.</h2>
                <h2>Your family name is: {name.lastName}.</h2>
                <h2>{JSON.stringify(name)}</h2>{/*Hooks don't merge the state - we do it 
                using the spread operator like above */}
            </form>
        </div>
    )
}

export default HookCounterThree
