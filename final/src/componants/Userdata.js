import React, { createContext, useReducer } from 'react'

const initialdata = {
    'users': [
        { name: 'Rocky', Lname: 'Rathod', id: '1' },
        { name: 'Saumya', Lname: 'Patel', id: '2' },
        { name: 'Pragya', Lname: 'Gupta', id: '3' },
        { name: 'Charmi', Lname: 'Chaudhri', id: '4' },
        { name: 'Darshan', Lname: 'Parekh', id: '5' }
    ]
}

const appReducer = (state, action) => {
    switch (action.type) {
        case 'remove':
            return {
                users: state.users.filter(
                    user => user.id !== action.payload
                )
            }

        case 'edit':
            const user_data = action.payload
            const updateUser = state.users.map(
                user => {
                    if (user.id === user_data.id) {
                        return user_data
                    }
                    return user
                }
            )
            return {
                users: updateUser
            }

        default:
            return state
    }
}

export const UserListData = createContext(initialdata)

export const UserListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialdata);
    const Remove_User = (id) => {
        dispatch({
            type: "remove",
            payload: id
        })
    }

    const EditUser = (user) => {
        dispatch({
            type: "edit",
            payload: user
        })
    }

    return (
        <UserListData.Provider value={{
            users: state.users,
            removuser: Remove_User,
            edituser: EditUser,
            // forEdit: dispatch,
            // forRemove: dispatch
        }}>
            {children}
        </UserListData.Provider>
    )
}