import React, { Component } from 'react';
import EmployeeDashboard from './EmployeeDashboard';

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeedatas: []
    };
  }
  componentDidMount() {
    this.setState({
      employeedatas: JSON.parse(localStorage.getItem('employeeData'))
    });
    console.log(JSON.parse(localStorage.getItem('employeeData')));
  }

  render() {
    return (
      <div>
        <div className="body-bg">
          <div className="common-title">Employee Details</div>
        </div>
      </div>
    );
  }
}
export default EmployeeDetails;
