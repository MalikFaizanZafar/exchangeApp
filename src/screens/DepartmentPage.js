import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import tableData from "../store/data";
import MoreInfoDialog from "./../components/MoreInfoDialog";
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: "100%",
    // marginTop: theme.spacing.unit * 1
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell); 

class CustomPaginationActionsTable extends React.Component {
  state = {
    rows: tableData,
    selectedStudent: {},
    selectedClass: {},
    page: 0,
    rowsPerPage: 10,
    moreInfoOpen: false
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  handleClickOpen = id => {
    const selectedStd = this.state.rows.filter(std => std.id === id);
    this.setState(
      {
        selectedStudent: selectedStd[0],
        moreInfoOpen: true
      },
      () => console.log("this.state.selectedStudent : ", this.state.selectedStudent)
    );
  };
  viewSelectedClass = (cls) => {
    const selectedCls = this.state.rows.filter(std => std.class === cls)
    this.setState({
      selectedClass: selectedCls
    },()=> {
      console.log("this.state.selectedClass : ", this.state.selectedClass)
    })
  }
  handleClose = () => {
    this.setState({ moreInfoOpen: false });
  };

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <MoreInfoDialog
          visible={this.state.moreInfoOpen}
          handleClose={this.handleClose}
          student={this.state.selectedStudent}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell align="left">Reg No.</CustomTableCell>
                <CustomTableCell align="left">Name</CustomTableCell>
                <CustomTableCell align="left">Class</CustomTableCell>
                <CustomTableCell align="left">Age</CustomTableCell>
                <CustomTableCell align="left">City</CustomTableCell>
                <CustomTableCell align="left">Actions</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.class}</TableCell>
                    <TableCell align="left">{row.age}</TableCell>
                    <TableCell align="left">{row.city}</TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        onClick={() => this.handleClickOpen(row.id)}
                      >
                        More Info
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

CustomPaginationActionsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const DepartmentPageTable = withStyles(styles)(CustomPaginationActionsTable);
const DepartmentPage = withRouter(DepartmentPageTable)
export default DepartmentPage;