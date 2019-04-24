import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { withRouter } from "react-router-dom";

class DenseAppBar extends React.Component {
  state = {
    backArrow: false
  };
  render() {
    this.state.backArrow = this.props.backArrow;
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton color="inherit" aria-label="Menu" style={{ marginLeft: -30}}>
              {this.state.backArrow ? (
                <Icon
                  fontSize="large"
                  onClick={() => {
                    this.props.history.push(`/`);
                  }}
                >
                  keyboard_backspace
                </Icon>
              ) : (
                <Icon fontSize="large">menu</Icon>
              )}
            </IconButton>
            <Typography variant="h6" color="inherit">
              Exchange App
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const AppTopBar = withRouter(DenseAppBar);
export default AppTopBar;
