import React, { Component } from "react";
import DepartmentPageTable from "../components/departmentPageTable";
import { withRouter } from 'react-router-dom';

 class DepartmentPageClass extends Component {
  render() {
    return (
      <div>
        <DepartmentPageTable />
      </div>
    );
  }
}
const DepartmentPage = withRouter(DepartmentPageClass)
export default DepartmentPage;