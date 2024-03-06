import React from 'react'

function Greetings() {

    const sayHi = (name) => {
        alert("Hello " + name);
    }

    return (
        <div>

            <button onClick={() => sayHi("Alex")}>Click Me : Alert</button>
        </div>
    )
}

export default Greetings