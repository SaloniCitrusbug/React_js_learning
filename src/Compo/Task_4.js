import React, { useState, useEffect } from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const data = [
    { fname: 'Rocky', lname: 'Rathod', id: '1' },
    { fname: 'Saumya', lname: 'Patel', id: '2' },
    { fname: 'Pragya', lname: 'Gupta', id: '3' },
    { fname: 'Charmi', lname: 'Chaudhri', id: '4' },
    { fname: 'Darshan', lname: 'Parekh', id: '5' }
]

export default function Table() {

    const [myData, setMyData] = useState(data);
    const [editPersonId, setEditPersonId] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const [editFormData, setEditFormData] = useState({
        id: '',
        fname: '',
        lname: ''
    });

    const handleEditFormChange = (event) => {
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    }


    //onclick edit

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
        const index = data.findIndex((person) => person.id === editPersonId);
        newData[index] = editedPerson;
        setMyData(newData);
        setEditPersonId(null);
        setFormErrors(validate(editFormData));
        setisSubmit(true);
    }


    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(editFormData);
        }
        < p > {editFormData.fname}</p >
    }, [handleEditFormSubmit])



    const validate = (values) => {
        const errors = {};
        if (!values.id) {
            errors.id = "id required!";
        }
        if (!values.fname) {
            errors.fname = "name required!";
        }
        if (!values.lname) {
            errors.lname = "name required!";
        }
        return errors;
    }

    return (
        <div className="table">
            <form onSubmit={handleEditFormSubmit} >
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
                                            ? <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} validate={validate} />
                                            : <ReadOnlyRow person={person} handleEditClick={handleEditClick} />
                                    }

                                </>
                            })
                        }
                    </tbody>
                </table>
            </form>
        </div>
    )
};


// rules={[
//     {
//         required: true,
//         message: "Please enter your name",
//     }
// ]}