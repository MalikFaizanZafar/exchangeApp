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
import { getSelectedStudent, getSelectedClass } from "../store/data";
import MoreInfoDialog from "./../components/MoreInfoDialog";
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
    students: [],
    selectedStudent: {},
    moreInfoOpen: false
  };
  componentDidMount() {
    const params = this.props.location.search;
    let splittedParams = params.split("=");
    let className = splittedParams[1];
    getSelectedClass(className)
      .then(sltdClass => {
        this.setState({ students: sltdClass });
      })
      .catch(error => console.log("No Class found due to Error : ", error));
  }

  handleClickOpen = id => {
    getSelectedStudent(id).then(sldStudent => {
      this.setState({selectedStudent:sldStudent}, () => {
        this.setState({ moreInfoOpen: true})
      })
    }).catch(error => console.log(error))
  };
  
  handleClose = () => {
    this.setState({ moreInfoOpen: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <AppTopBar backArrow={true} />
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
              {this.state.students.map(row => (
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
const DepartmentPage = withRouter(DepartmentPageTable);
export default DepartmentPage;
