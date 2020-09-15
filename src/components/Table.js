import React from 'react'

const Table = ({ children }) => {
    return (
        <tr>
            <td>
                <img src={children.picture}></img>
            </td>
            <td>{children.name}</td>
            <td>{children.age}</td>
            <td>{children.email}</td>
        </tr>
    )
}

export default Table
