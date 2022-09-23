import React from 'react'
const Jssx = (props) => {
    return <div className="container">
        <h1>hello {props.className}</h1>
        {props.children}
    </div>
}

export default Jssx