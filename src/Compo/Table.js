import React, { useState } from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

let data = [
    { fname: 'Rocky', lname: 'Rathod', id: '1' },
    { fname: 'Saumya', lname: 'Patel', id: '2' },
    { fname: 'Pragya', lname: 'Gupta', id: '3' },
    { fname: 'Charmi', lname: 'Chaudhri', id: '4' },
    { fname: 'Darshan', lname: 'Parekh', id: '5' }
]

export default function Table() {

    const [myData, setMyData] = useState(data);
    const [editPersonId, setEditPersonId] = useState(null);
    const [formErrors, setFormErrors] = useState([]);
    const [editFormData, setEditFormData] = useState({
        id: '',
        fname: '',
        lname: ''
    });

    // let data = [
    //     {validate:rowData=>"required"}
    // ]
 

    //onclick edit.....
    const handleEditClick = (event, person) => {
        event.preventDefault();
        setEditPersonId(person.id);

        const formValues = {
            id: person.id,
            fname: person.fname,
            lname: person.lname
        }
        setEditFormData(formValues);
    }

    //save edited text
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedPerson = {
            id: editFormData.id,
            fname: editFormData.fname,
            lname: editFormData.lname
        }
        const newData = [...myData];
        const index = myData.findIndex((person) => person.id === editPersonId);

        // if (editedPerson.id.length !== 0 && editedPerson.fname.length !== 0 && editedPerson.lname.length !== 0) {

        // }   
        console.log(editedPerson.id);
        newData[index] = editedPerson;
        setMyData(newData);
        setEditPersonId(null);
    }

    //For validation
    const validate = (values,persons) => {
        let errors = [];
        // console.log(persons.parentNode.parentNode)
    //    alert(persons)
        if (values.id === '') {
            errors.push("id required!");
        }
        if (!values.fname) {
            errors.push("fname required!");
        }
        if (values.lname === '') {
            errors.push("lname required!");
        }
        else {
            return values
        }
        setFormErrors(errors);
    }

    // const validate = (values, persons) => {
    //     setFormErrors(persons.id)
    //     const err = {
    //         id: persons.id,
    //         fname: persons.fname,
    //         lname: persons.lname
    //     }
    //     console.log(err.id)
    //     const newErr = [...formErrors];
    //     const errors = myData.findIndex((persons) => persons.id === editPersonId);
        
    //     console.log(errors)
    //     if (values.id === ' ') {
    //         errors.push("id required!");
    //     }
    //     if (values.fname === ' ') {
    //         errors.fname("fname required!");
    //     }
    //     if (values.lname === ' ') {
    //         errors.lname("lname required!");
    //     }
    //     else {
    //         return null
    //     }
    //     newErr[errors] = err;
    //     setFormErrors(newErr);
    // }

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        const response = validate(newFormData,event.target);
        console.log("Response: ",response)
        console.log("Error: ",formErrors)
        if (!response) {
            // setEditPersonId(null);
            console.log("hyyyyy  ",Object.values(formErrors).every(value=>value===Object.values(formErrors)[0]))
        }
        else {
            setEditFormData(newFormData);
        }
        setEditFormData(newFormData)
    }

    return (
        <div className="table">
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>fname</th>
                            <th>lname</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myData.map((person) => {
                                return <>
                                    {
                                        editPersonId === person.id
                                            ? <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} />
                                            : <ReadOnlyRow person={person} handleEditClick={handleEditClick} formErrors={formErrors}/>
                                    }
                                    <div>
                                        {
                                            formErrors.length === 0
                                                ? null
                                                : formErrors.map((error,index) => {
                                                    return <>
                                                        <h5>{error}</h5>
                                                        {/* <p editFormData={editFormData}>required</p> */}
                                                    </>
                                                })
                                        }
                                    </div>
                                </>
                            })
                        }
                    </tbody>
                </table>
            </form>
        </div>
    )
};
