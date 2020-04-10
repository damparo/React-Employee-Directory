import React from "react";
import "./styles.css";

function Employee(props) {
  return (
    
      <tr>
        <th scope="row">{props.number}</th>
        <td>{props.name}</td>
        <td>{props.lastname}</td>
        <td>{props.roles}</td>
        <td>{props.handle}</td>
      </tr>
    
  );
}

export default Employee;
