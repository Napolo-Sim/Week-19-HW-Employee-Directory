import React from 'react'

const Searchotron = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid m-0">
            <div className="container">
                <h2 className="text">Employee Search</h2>
                <form>
                    <div className="input-group">
                        <input
                            onChange={props.employeeSearch}
                            type="text"
                            className="form-control"
                            placeholder="Try searching for an employee by name" />
                    </div>
                </form>
                <h6 className="font-italic font-weight-light">The search is case sensitive</h6>
            </div>
        </div>
    )
}

export default Searchotron
