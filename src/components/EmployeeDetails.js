import React from 'react';

function EmployeeDetails() {
  const employeeData = JSON.parse(localStorage.getItem('employeedata'));
  console.log(employeeData);

  return (
    <div>
      <div className="body-bg">
        <div className="common-title">Employee Details</div>
        <div id="employeeDataContainer">{employeeData}</div>
      </div>
    </div>
  );
}
export default EmployeeDetails;
