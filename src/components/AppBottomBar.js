import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import readXlsxFile from 'read-excel-file'
import XLSX from 'xlsx';

const styles = {
  root: {
    width: '100%',
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
    FileReader:new FileReader()
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleFileRead = (e) => {
    console.log('handleFileRead e is : ', e)
    const result = this.state.FileReader.result
    // readXlsxFile(result).then((row) => {
    //   console.log("handleFileRead row is : ", row)
    // })
    // console.log("handleFileRead result is : ", result)
    const wb = XLSX.read(input(result), {type:'binary'});
    const wsname = wb.SheetNames[0];
		const ws = wb.Sheets[wsname];
    const data = XLSX.utils.sheet_to_json(ws, {header:1});
    console.log("data is : ", data)
  }
  handleFileChosen = (file) => {
    console.log('handleFileChosen file is : ', file)
    this.state.FileReader.onloadened = this.handleFileRead 
    this.state.FileReader.readAsText(file)
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
      <FormControl>
      <Input type="file" onChange={ e => this.handleFileChosen(e.target.files[0]) }></Input>
      </FormControl>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

const AppBottomBar = withStyles(styles)(SimpleBottomNavigation);
export default AppBottomBar;