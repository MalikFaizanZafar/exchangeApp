import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getSelectedStudent } from "../store/data";
import Chip from '@material-ui/core/Chip';

class MoreInfoDialog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedStudent: {}
    }
  }
  componentDidMount(){
    console.log('this.props.studentId : ', this.props.studentId)
    getSelectedStudent(this.props.studentId).then(sldStudent => {
      this.setState({selectedStudent:sldStudent}, () => {
        console.log("this.state.selectedStudent : ", this.state.selectedStudent)
      })
    }).catch(error => console.log(error))
  }
  render() {
    const student = this.state.selectedStudent
    return (
      <div>
        <Dialog
          open={this.props.visible}
          onClose={this.props.handleClose}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">More Info</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {/* {
                Object.values(student.extraFields).forEach((std,i) => {
                  <Chip
                    key={i}
                    label={std}
                    clickable
                    color="primary"
                  />
                })
              } */}
            <Chip
              label={student.name}
              clickable
              color="primary"
            />
            <Chip
              label={student.age}
              clickable
              color="primary"
            />
            <Chip
              label={student.city}
              clickable
              color="primary"
            />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

export default MoreInfoDialog;
