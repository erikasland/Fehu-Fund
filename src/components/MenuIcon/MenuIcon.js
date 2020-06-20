import React from 'react';
import Hamburger from './menu-icon.png';
import './MenuIcon.css';

class MenuIcon extends React.Component {
    render () {
        const currentPageTitle = this.props.currentPageTitle;
        const sideNavBarOpen = this.props.sideNavBarOpen;

        const toggleNavBar = () => {
            this.props.updateSideNavBarOpen();
        };

        return (
            <div className="menu-icon-wrapper">
                <div className="hamburger-page-name-wrapper">
                    <div className="hamburger-container" onClick={toggleNavBar}>
                        <img className={sideNavBarOpen ? "hamburger rotate":"hamburger"} src={Hamburger} alt="'Hamburger' menu icon that leads to navigation links." />
                    </div>
                    <div className="current-page-title">
                        <h3>{currentPageTitle.toUpperCase()}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuIcon;