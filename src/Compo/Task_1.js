import React, { useState } from 'react'

function Example() {

    const [data, setData] = useState()
    // const [print, setPrint] = useState(false)
  
    function getData(val) {
        // console.log(val.target.value)
        setData(val.target.value)
        // setPrint(false)
    }

    return (
        <div>
            Name:<input type="text" onChange={getData} />
            <h3>{data}</h3>
            {/* <button onClick={() => setPrint(true)}>Submit</button>
            {
                print ? <h3>{data}</h3> : null
            } */}

        </div>
    )
}

export default Example
