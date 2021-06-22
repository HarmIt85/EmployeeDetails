import React from 'react';
import EmployeeDashboard from './EmployeeDashboard';

function EmployeeDetails() {
  const employeeData = JSON.parse(localStorage.getItem('employeeData'));
  const employeeDataArr = employeeData.split(',');

  return (
    <div>
      <div className="body-bg">
        <div className="common-title">Employee Details</div>
        {employeeData ? (
          <div id="employeeDataContainer">
            <div class="data-table">
              <div class="data-table-heading">
                <div class="data-table-heading-col" />
                <div class="data-table-heading-col">First Name</div>
                <div class="data-table-heading-col">Last Name</div>
                <div class="data-table-heading-col">Experience</div>
                <div class="data-table-heading-col">Salary</div>
              </div>
              {employeeDataArr.map((employee, index) => (
                <EmployeeDashboard employee={employee} key={index} />
              ))}
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
export default EmployeeDetails;
