import React, { useState } from 'react'

function Task__3() {

    const [data, setname] = useState({
        fname: '',
        lname: '',
        email: ''
    })

    const Gatevalue = (event) => {
        const {name, value }= event.target;
        setname({...data, [name]: value})
    }

    return (
        <div>
            First Name:<input type="text" name='fname' onChange={Gatevalue} value={data.fname} /><br /><br />
            Last Name:<input type="text" name='lname' onChange={Gatevalue} value={data.lname} /><br /><br />
            Email:<input type="text" name='email' onChange={Gatevalue} value={data.email} />
            <h3>{data.fname}</h3>
            <h3>{data.lname}</h3>
            <h3>{data.email}</h3>
            {/* <h3>{JSON.stringify(name)}</h3> */}
        </div>
    )
}

export default Task__3