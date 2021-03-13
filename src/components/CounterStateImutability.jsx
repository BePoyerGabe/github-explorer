
//começa com use -> é hook ou gancho
import {useState} from 'react'

export function Counter() {
    const [counter, setCounter] = useState(0)
    
    function increment() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Acrescentar 1</button>
        </div>
    )
}