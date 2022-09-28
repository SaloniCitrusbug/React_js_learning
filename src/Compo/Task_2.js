import React, { useState } from 'react'

function Task_2() {

    const [name, setname] = useState({
        fname: '',
        lname: 'Patel'
    })

    function Gatedata(val) {
        setname({fname: val.target.value})
    }

    return (
        <div>
            First Name:<input type="text" name='fname' onChange={Gatedata} /><br /><br />
            Last Name:<input type="text" name='lName' />
            <h3>{name.fname}</h3>
            
        </div>
    )
}

export default Task_2

// import React, { useState } from 'react'

// function Task__3() {

//     const [name, setname] = useState({
//         fname: '',
//         lname: '',
//         email: ''
//     })

//     const Gatevalue = (event) => {
//         const value = (event.target.value);
//         const names = event.target.name;

//         setname(() => {
//             switch (true) {
//                 case names === 'fName':
//                     return {
//                         ...name,
//                         fname: value,
//                     }

//                 case names === 'lName':
//                     return {
//                         ...name,
//                         lname: value,
//                     }

//                 case names === 'Email':
//                     return {
//                         ...name,
//                         email: value,
//                     }

//                 default:
//                     return null
//             }
//         })
//     }

//     return (
//         <div>
//             First Name:<input type="text" name='fName' onChange={Gatevalue} value={name.fname} /><br /><br />
//             Last Name:<input type="text" name='lName' onChange={Gatevalue} value={name.lname} /><br /><br />
//             Email:<input type="text" name='Email' onChange={Gatevalue} value={name.email} />
//             <h3>{name.fname}</h3>
//             <h3>{name.lname}</h3>
//             <h3>{name.email}</h3>
//             {/* <h3>{JSON.stringify(name)}</h3> */}
//         </div>
//     )
// }

// export default Task__3