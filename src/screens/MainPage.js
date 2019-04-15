import React, { Component } from 'react'
import TopNavBar from '../components/topBar';
import MainPageTable from '../components/mainPageTable';
import Grid from '@material-ui/core/Grid';

class MainPage extends Component {
  render() {
    return (
      <div>
      <TopNavBar></TopNavBar>
      <Grid container spacing={12} justify="center">
      <Grid item sm={10}>
        <MainPageTable></MainPageTable>
      </Grid>
      </Grid>
      </div>
    )
  }
}

export default MainPage;