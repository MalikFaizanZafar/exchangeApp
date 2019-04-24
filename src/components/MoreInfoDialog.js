import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getSelectedStudent } from "../store/data";

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
      this.setState({selectedStudent:sldStudent})
    }).catch(error => console.log(error))
  }
  render() {
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
              {/* { this.state.selectedStudent} */}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

export default MoreInfoDialog;
