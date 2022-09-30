import React from 'react';

export default function ReadOnlyRow({ person, handleEditClick }) {
    return (
        <tr>
            <td align='center' width="20" >{person.id}</td>
            <td align='center' >{person.fname} </td>
            <td align='center'>{person.lname}</td>
            <td>
                &nbsp;
                <button onClick={(e) => handleEditClick(e, person)}>Edit</button>
                &nbsp;
            </td>
        </tr>
    )

}
