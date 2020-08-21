import React from 'react'

const Table = (props) => {
    return (
        <tr>
            <td>
                <img src={props.children.picture}></img>
            </td>
            <td>{props.children.name}</td>
            <td>{props.children.age}</td>
            <td>{props.children.email}</td>
        </tr>
    )
}

export default Table
