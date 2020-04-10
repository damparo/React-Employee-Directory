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

  handleChange(e)  {
    this.setState({
      value: e.target.value.toLowerCase()
    })
  }


  render() {
    const employees = this.state.data.filter(employee => {
      const keys = Object.values(employee);
  
      for(let  i = 0; i < keys.length; i++){
        if(keys[i].toLowerCase().includes(this.state.value)){
          return true;
        }
      }
      return false;
    })
    return (
      <div className="container">
        <Banner />
        <form>
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
            {employees.map((employee) => (
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
