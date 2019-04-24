import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import tableData, { getSelectedStudent } from "../store/data";
import MoreInfoDialog from "./../components/MoreInfoDialog";
import TablePaginationWrapper from "./../components/TablePaginationWrapper";
import { withRouter } from "react-router-dom";
import AppTopBar from "../components/AppTopBar";

const styles = theme => ({
  root: {
    width: "100%"
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
    selectedClass: [],
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
    getSelectedStudent(id).then(sldStudent => {
      this.setState({selectedStudent:sldStudent}, () => {
        this.setState({ moreInfoOpen: true})
      })
    }).catch(error => console.log(error))
  };

  viewSelectedClass = cls => {
    this.props.history.push(`/department?name=${cls}`);
  };
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
        <AppTopBar />
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
                      &nbsp;&nbsp;
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        onClick={() => this.viewSelectedClass(row.class)}
                      >
                        Department
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
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 25]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationWrapper}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

CustomPaginationActionsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export const MainPageTable = withStyles(styles)(CustomPaginationActionsTable);
const MainPage = withRouter(MainPageTable);
export default MainPage;
