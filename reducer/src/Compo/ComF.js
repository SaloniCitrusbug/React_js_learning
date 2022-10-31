import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComF() {
    const countContext = useContext(CountContext)
        return (
            <div>
                ComF
                <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
                <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
                <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
            </div>
        )
    }

export default ComF

