import React, {useState} from 'react'
import EditableRow from './EditableRow'

const data = [
    { fname: 'Rocky', lname: 'Rathod', id: '1' },
    { fname: 'Saumya', lname: 'Patel', id: '2' },
    { fname: 'Pragya', lname: 'Gupta', id: '3' },
    { fname: 'Charmi', lname: 'Chaudhri', id: '4' },
    { fname: 'Darshan', lname: 'Parekh', id: '5' }
]

function Table() {

    const [name, setname] = useState(null);

    return (
        <div className='table'>
            <form action="">
                <table >
                    <thead >
                        <tr>
                            <th>
                                fname
                            </th>
                            <th>
                                lname
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td><input type="text" value={value.fname} /></td>
                                        <td><input type="text" value={value.lname}/></td>
                                        <td><button>Edit</button></td>
                                        <td><EditableRow></EditableRow></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Table
