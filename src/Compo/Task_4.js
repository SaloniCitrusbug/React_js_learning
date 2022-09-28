import React from 'react'

function Task_4() {

    const data = [
        { fname: 'Rocky', lname: 'Rathod', id: '1' },
        { fname: 'Saumya', lname: 'Patel', id: '2' },
        { fname: 'Pragya', lname: 'Gupta', id: '3' },
        { fname: 'Charmi', lname: 'Chaudhri', id: '4' },
        { fname: 'Jalvi', lname: 'Parekh', id: '5' }
    ]

    function app(){
        const [person,setPerson]=useState(data)
    }

    return (
        <div className='app'>
            {
                person.map((data) =>
                    <input type="text" />
                )
            }
        </div>
    )
}

export default Task_4
