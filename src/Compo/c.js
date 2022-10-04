import React, { useState } from 'react';
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
    const [ref,setRef] = useState(null);
    const [editPersonId, setEditPersonId] = useState(null);
    const [formErrors, setFormErrors] = useState({
        id: '',
        fname: '',
        lname: ''
    });
    const [editFormData, setEditFormData] = useState({
        id: '',
        fname: '',
        lname: ''
    });
   

    //onclick edit.....
    const handleEditClick = (event, person) => {
        event.preventDefault();
        setFormErrors({
                id:'',
                fname:'',
                lname:''
            });
        setEditPersonId(person.id);
        setRef(person.id);

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

        if (editedPerson.id.length !== 0 && editedPerson.fname.length !== 0 && editedPerson.lname.length !== 0) {

            newData[index] = editedPerson;
            setMyData(newData);
        }   
        setEditPersonId(null);
        console.log(formErrors);
    }

    //For validation
    const validate = (values) => {
        let errors = {};
        // console.log(errors)
        if (values.id === '') {
            errors.id="id required!";
        }
        if (values.fname === '') {
            errors.fname="fname required!";
        }
        if (values.lname === '') {
            errors.lname="lname required!";
        }

        if(Object.keys(errors).length===0){
            return values
        }
        else {
            setFormErrors(errors);
        }
    }

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        const response = validate(newFormData);
        console.log("Response: ",response)
        console.log("Error: ",formErrors)
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
                                            ? <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} err={formErrors} setFormErrors={setFormErrors} />
                                            : <ReadOnlyRow person={person} handleEditClick={handleEditClick}  />
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