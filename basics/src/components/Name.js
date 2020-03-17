import React from 'react';

const Name = (props) => {
    const {name, age} = props
return (

    <div>
        <h1>{name} is {age} years old.</h1>
        {props.children}
    </div>

) 
        
}

export default Name