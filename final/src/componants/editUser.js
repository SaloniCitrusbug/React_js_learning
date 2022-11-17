import React, { useContext, useState, useEffect } from 'react'
import { UserListData } from './Userdata'
import { useParams, useNavigate } from 'react-router-dom'

function EditUser() {
    const { users, edituser } = useContext(UserListData)
    const { id } = useParams()
    const histroy = useNavigate()
    const [isErr, setIsErr] = useState(false)
    const [Newdata, setNewdata] = useState({
        name: '',
        Lname: ''
    })
    const [error, setError] = useState({
        name: '',
        Lname: ''
    })

    const changename = (e) => {
        // const {name,value}=e
        const value = (e.target.value)
        console.log(e.target.value, e.target.name, value)
        setNewdata(() => {
            switch (e.target.name) {
                case 'fName':
                    if (value === "") {
                        setError({ ...error, name: 'enter fname' })
                        setNewdata({
                            ...Newdata, name: value
                        })
                    }
                    else {
                        setError({ ...error, name: '' })
                        setNewdata({
                            ...Newdata, name: value
                        })
                    }
                    break;

                case 'lName':
                    if (value === "") {
                        setError({ ...error, Lname: 'enter lname' })
                        setNewdata({
                            ...Newdata, Lname: value
                        })
                    }
                    else {
                        setError({ ...error, Lname: "" })
                        setNewdata({
                            ...Newdata, Lname: value
                        })
                    }
                    break;

                default:
                    setNewdata(Newdata)
                    break;
            }
        })
    }
    console.log("1", Newdata)

    // const changename = (e) => {
    //     if (e.target.value === "") {
    //         setError({ ...error, name: 'enter fname' })
    //         setNewdata({
    //             ...Newdata, name: e.target.value
    //         })
    //     }
    //     else {
    //         setError({ ...error, name: '' })
    //         setNewdata({
    //             ...Newdata, name: e.target.value
    //         })
    //     }
    // }

    // const changelastLname = (e) => {
    //     if (e.target.value === "") {
    //         setError({ ...error, Lname: 'enter lname' })
    //         setNewdata({
    //             ...Newdata, Lname: e.target.value
    //         })
    //     }
    //     else {
    //         setError({ ...error, Lname: "" })
    //         setNewdata({
    //             ...Newdata, Lname: e.target.value
    //         })
    //     }
    // }

    const editNewdata = () => {
        if (error.name !== "" || error.Lname !== "") {
            setIsErr(true)
            return
        }
        edituser(Newdata)
        histroy('/')
    }

    useEffect(() => {
        const theNewdata = users.find(user => user.id === id)
        setNewdata(theNewdata)
    }, [])

    return (
        <div>
            <input type="text" onChange={changename} name='fName' value={Newdata.name} />
            <br />{isErr && <span>{error.name}</span>}
            {/* {isErr && <span >FirstName is required</span>}<br /> */}
            <br /><input type="text" name='lName' onChange={changename} value={Newdata.Lname} />
            <br />{isErr && <span>{error.Lname}</span>}
            <br /><button onClick={editNewdata} >Submit</button>
        </div>
    )
}

export default EditUser