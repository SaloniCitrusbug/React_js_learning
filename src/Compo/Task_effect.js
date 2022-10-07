import React, { useState, useEffect } from 'react'

function Task_effect() {

    const [Count, setCount] = useState(1);
    const [revcount, setrevCount] = useState(5);
    const [show, setshow] = useState(true)
    const [increment, setincrement] = useState(false)

    const val = () => {
        if (revcount === 1 ) {
            setshow(false)
        }
        increment ? setCount(precount => show ? precount + 1 : precount) :
            setrevCount(precount => show ? precount - 1 : precount)
    }

    useEffect(() => {
        const interval = setInterval(val, 1000)
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <div>
            {revcount}
            <br />
            {
                show ? null : <button onClick={() => setincrement(true)}> Submit</button>
            }
        </div>
    )
}

export default Task_effect
