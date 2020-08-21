import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Imported components
import Table from "./components/Table"
import Filters from "./components/Filters";
import Searchotron from "./components/Searchotron"



function App() {

  // Setting the empty array of employees
  let employeeList = [];

  useEffect(() => {
    getEmployees();
  }, [])

  // Function to fill up the initialEmployeeArray with API request
  const getEmployees = () => {

    axios.get("https://randomuser.me/api/?results=15&nat=us")
      .then((res) => {
        let randomUser = res.data.results
        console.log(res.data.results);
        randomUser.forEach((user) => {
          employeeList.push({
            name: user.name.first + " " + user.name.last,
            age: user.dob.age,
            email: user.email,
            picture: user.picture.thumbnail
          })
        })
        setEmployee([...employeeList])
      })
      .catch((err) => console.log(err))
  }

  // Definition of state for Employees
  const [employee, setEmployee] = useState(employeeList)

  // Definition of state for Input search
  const [search, setSearch] = useState({
    name: "",
  });

  // Function to update input state (based on user input)
  const employeeSearch = (e) => {
    setSearch({ ...search, name: e.target.value });
  };


  // Rule to filter and update employee list
  // eslint-disable-next-line
  const matchingEmployees = employee.filter(function (emp) {
    if (search.name.length < 0) {
      return employee
    } else if (emp.name.includes(search.name)) {
      return emp
    }
  });



  return (
    <div className="App">
      <Searchotron employeeSearch={employeeSearch} />
      <div style={{ paddingBottom: 55 + 'px', display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#e9ecef" }}>
        <Filters text="Youngest First" click={() => {
          employee.sort((a, b) => (a.age > b.age) ? 1 : -1)
          setEmployee([...employee])
        }} />
        <Filters text="Oldest First" click={() => {
          employee.sort((a, b) => (b.age > a.age) ? 1 : -1)
          setEmployee([...employee])
        }} />
        <Filters text="Refresh employees" click={() => {
          getEmployees()
          setEmployee([...employeeList])
        }} />
      </div>

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody >

          {matchingEmployees.map((employee, id) => (
            <Table key={id}>
              {employee}
            </Table>
          ))}

        </tbody>
      </table>
    </div>

  );
}


export default App;
