import React from 'react';

function EmployeeDashboard(props) {
  console.log('props: ' + props);
  return (
    <div className="data-table-heading-col">
      <div className="data-table-heading-col">{props.employee.id}</div>
      <div className="data-table-heading-col">{props.employee.firstname}</div>
      <div className="data-table-heading-col">{props.employee.lastname}</div>
      <div className="data-table-heading-col">{props.employee.experience}</div>
      <div className="data-table-heading-col">{props.employee.salary}</div>
    </div>
  );
}

export default EmployeeDashboard;
