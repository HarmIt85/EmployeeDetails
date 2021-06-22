import React from 'react';
import '../styles/Employeedata.css';

function EmployeeDashboard(props) {
  console.log('props: ' + props);
  return (
    <div className="data-table-row">
      <div className="data-table-data-col">{props.employee.id}</div>
      <div className="data-table-data-col">{props.employee.firstname}</div>
      <div className="data-table-data-col">{props.employee.lastname}</div>
      <div className="data-table-data-col">{props.employee.experience}</div>
      <div className="data-table-data-col">{props.employee.salary}</div>
    </div>
  );
}

export default EmployeeDashboard;
