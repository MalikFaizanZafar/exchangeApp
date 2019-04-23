import React, { Component } from "react";
import PropTypes from "prop-types";
import DepartmentPageTable from "../components/departmentPageTable";

export default class DepartmentPage extends Component {
  static contextTypes = {
    router: PropTypes.object,
    location: PropTypes.object
  };
  render() {
    return (
      <div>
        <DepartmentPageTable />
      </div>
    );
  }
}
