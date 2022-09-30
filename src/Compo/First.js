// import React, { Component } from 'react'

// class First extends Component {
//     render() {
//         return <h1>Good Morning {this.props.className}</h1>
//     }
// }

// export default First

import React, { useState } from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const data = [{ fname: 'Pragya', lname: 'Gupta', id: '3' }, { fname: 'Charmi', lname: 'Chaudhri', id: '4' }, { fname: 'Darshan', lname: 'Parekh', id: '5' }]

export default function Table() {

    const [myData, setMyData] = useState(data);
    const [editPersonId, setEditPersonId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        id: '',
        fname: '',
        lname: ''
    });

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
        console.table(newData);
        setMyData(newData);
        setEditPersonId(null);
    }

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        console.log(fieldName, ' ', fieldValue)
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    }

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

    const handleCancelClick = () => {
        setEditPersonId(null);
    }

    const handleDeleteClick = (personId) => {
        const newData = [...myData];
        const index = myData.findIndex((person) => person.id === personId);
        newData.splice(index, 1);
        console.log(newData);
        setMyData(newData);
        console.log(newData);
    }

    return (
        <div className="table">
            <form onSubmit={handleEditFormSubmit}>
                <table border="1">
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
                            myData.map((person, key) => {
                                return <>
                                    {
                                        editPersonId === person.id
                                            ? <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} />
                                            : <ReadOnlyRow person={person} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
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