import React from "react";
import './Navigation.css'; 
import MenuIcon from '../MenuIcon/MenuIcon';

class Navigation extends React.Component {
    render () {
      return (
        <nav>
            <MenuIcon updateSideNavBarOpen={this.props.updateSideNavBarOpen} sideNavBarOpen={this.props.sideNavBarOpen} currentPageTitle={this.props.currentPageTitle}/>
            <div className="title-container">
              <h3>FEHU FUND</h3>
            </div>
        </nav>
      )
    }
}

export default Navigation;