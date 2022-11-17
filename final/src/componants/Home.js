import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserListData } from './Userdata'

function Home() {
    const { users, removuser } = useContext(UserListData)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>FName</th>
                        <th>LName</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <>
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.Lname}</td>
                                        <Link to={`/edit/${user.id}`}>
                                            <td><button>Edit</button></td>
                                        </Link>
                                            <button onClick={() => removuser(user.id)} >Delete</button>
                                    </tr>
                                </>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home