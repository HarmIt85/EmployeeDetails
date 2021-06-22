import React from 'react';

function EmployeeDashboard(props) {
  console.log('props: ' + props);
  return (
    <div class="data-table-heading-col">
      <div class="data-table-heading-col">{props.employee.id}</div>
      <div class="data-table-heading-col">{props.employee.firstname}</div>
      <div class="data-table-heading-col">{props.employee.lastname}</div>
      <div class="data-table-heading-col">{props.employee.experience}</div>
      <div class="data-table-heading-col">{props.employee.salary}</div>
    </div>
  );
}

export default EmployeeDashboard;
