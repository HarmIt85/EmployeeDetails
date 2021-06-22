import React from 'react';
import EmployeeDashboard from './EmployeeDashboard';

function EmployeeDetails() {
  const employeeData = JSON.parse(localStorage.getItem('employeeData'));

  return (
    <div>
      <div className="body-bg">
        <div className="common-title">Employee Details</div>
        {employeeData ? (
          <div id="employeeDataContainer">
            <div className="data-table">
              <div class="data-table-heading">
                <div className="data-table-heading-col" />
                <div className="data-table-heading-col">First Name</div>
                <div className="data-table-heading-col">Last Name</div>
                <div className="data-table-heading-col">Experience</div>
                <div className="data-table-heading-col">Salary</div>
              </div>

              {employeeData.employees.map((employee, index) => (
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
