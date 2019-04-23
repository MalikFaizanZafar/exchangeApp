import React from 'react';
import MainPageTable from '../components/mainPageTable';
import { withRouter } from 'react-router-dom';


class MainPageClass extends React.Component {
  render(){
    return (
      <div>
          <MainPageTable></MainPageTable>
      </div>
    );
  }
}
const MainPage = withRouter(MainPageClass)
export default MainPage;