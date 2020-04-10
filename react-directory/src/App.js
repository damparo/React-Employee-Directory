import React, { Component } from "react";
import logo from "./logo.svg";
import Banner from "./components/Banner/banner";
import data from "./data.json";
import Employee from "./components/Employee/employee";
import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      data: data,
      value: ""
    }
  };

  
  handleSearchChange(event) {

    const { value } = event.target;
    // const employeeSearch = event.target.value

  const everyone = this.state.data.filter(employee => Object.values(employee) !== undefined)
    
  };

  handleSearch(e) {
    e.preventDefault();
    // console.log("hello");
    const name = this.state.value
    const officePerson = this.state.data.filter(employee => employee.name === name)
    this.setState({
      data: officePerson
    })

    const handle = this.state.value
    const handleOfPerson = this.state.data.filter(employee => employee.handle === handle)
    this.setState({
      data: handleOfPerson
    })


    const roles = this.state.value
    const roleOfPerson = this.state.data.filter(employee => employee.roles !== undefined)
    this.setState({
      data: roleOfPerson
    })

    

  }

  handleChange(e)  {
    this.setState({
      value: e.target.value
    })
  }


  render() {
    return (
      <div className="container">
        <Banner />
        <form onSubmit={(e) => this.handleSearch(e)}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Roles</th>
              <th scope="col">Work Handle</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((employee) => (
              <Employee
                key={employee.number}
                number={employee.number}
                name={employee.name}
                lastname={employee.lastname}
                roles={employee.roles}
                handle={employee.handle}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
