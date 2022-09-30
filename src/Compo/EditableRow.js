import React from 'react';

export default function EditableRow({ editFormData, handleEditFormChange }) {
    return (
        <tr>
            <td align='center' width="20">
                <input type="text" name='id' value={editFormData.id} onChange={handleEditFormChange} />
            </td>
            <td align='center'>
                <input type="text" name='fname' value={editFormData.fname} onChange={handleEditFormChange} />
                {/* <p>{editFormData.fname}</p> */}
            </td>
            <td align='center'>
                <input type="text" name='lname' value={editFormData.lname} onChange={handleEditFormChange} />
                {/* <p>{editFormData.lname}</p> */}
            </td>
            <td>
                &nbsp;
                <button type="submit">Submit</button>
            </td>
        </tr>
    )

}
