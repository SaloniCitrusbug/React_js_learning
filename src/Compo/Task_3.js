import React, { useState } from 'react'

function Task_3() {

    const [name, setname] = useState({
        fname: '',
        lname: '',
        email: ''
    })

    function Gatevalue(val, label) {
        console.log(val)
        var a = name;
        switch (val) {
            case label === "1":
                a.fname = val.target.value
                return setname(a)

            case label === "2":
                a.lname = val.target.value
                return setname(a)   

            case label === "3":
                a.email = val.target.value
                return setname(a)

            default:
                return null
        }
    }
    // console.log(a)

    return (
        <div>
            First Name:<input type="text" name='fname' onChange={(e) => Gatevalue(e.target.value, "1")} /><br /><br />
            Last Name:<input type="text" name='lname' onChange={(e) => Gatevalue(e.target.value, "2")} /><br /><br />
            Email:<input type="text" name='email' onChange={(e) => Gatevalue(e.target.value, "3")} />
            <h3>{name.fname}</h3>

        </div>
    )
}
export default Task_3

