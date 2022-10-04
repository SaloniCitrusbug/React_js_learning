import React from 'react';

export default function EditableRow({ editFormData, handleEditFormChange, err }) {
    // console.warn(err)
    return (<>
        <tr>
            <td>
                <input type="text" name='id' value={editFormData.id} onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="text" name='fname' value={editFormData.fname} onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="text" name='lname' value={editFormData.lname} onChange={handleEditFormChange} />
            </td>
            <td>
                &nbsp;
                <button type="submit"  >Submit</button>
            </td>
        </tr>

        <tr>
            <td><b>{err.id}</b></td>
            <td><b>{err.fname}</b></td>
            <td><b>{err.lname}</b></td>
        </tr>

    </>
    )
}
