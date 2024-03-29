import React from "react";

function EmployeeDetails(props) {
  
  function handleDelete(){
    if(props.employee.id){
      props.handleDeleteEmployee(props.employee.id);
    };
  }

    if (Object.keys(props.employee).length > 0) {
    return (
        <div id="EmployeeDetails">
      <div id="EmployeeDetails1">
        <h2>Employee Details:</h2>
        <p>Id: {props.employee.id}</p>
        <p>Name: {props.employee.name}</p>
        <p>Salary: {props.employee.Salary}</p>
        <p>Designation: {props.employee.Designation}</p>
        <button id="Delete" type="button" onClick={handleDelete}>Delete </button>
        <button id="Edit" type="button">Edit</button>
      </div>
      </div>
    

    );
  } else {
    return null;
  }
}

export default EmployeeDetails;