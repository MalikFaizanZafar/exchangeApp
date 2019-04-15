import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

class TopBar extends Component {
  render() {
    return (
      <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton className="menu" color="inherit" aria-label="Exchange App">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Exchange App
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
    )
  }
}

const TopNavBar = withStyles(styles)(TopBar);
export default TopNavBar;