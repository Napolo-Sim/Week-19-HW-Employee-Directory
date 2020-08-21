import React from 'react'

const Filters = (props) => {
    return (
        <button onClick={props.click} className="btn btn-primary mr-2">{props.text}</button>
    )
}

export default Filters
