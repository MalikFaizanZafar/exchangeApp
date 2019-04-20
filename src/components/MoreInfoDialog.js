import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function MoreInfoDialog(props){
  return (
    <div>
      <Dialog
        open={props.visible}
        onClose={props.handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">More Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {props.student.name}
          {props.student.city}
          {/* {props.student.extraFields.map(ef => ef)} */}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MoreInfoDialog;