import React from 'react';
import './SideNavBar.css';

class SideNavBar extends React.Component {
    render() {
        const sideNavBarOpen = this.props.sideNavBarOpen;
    
        const handleMouseOverLink = (name) => {
            if (this.props.navLinkStatus[name] === false) {
                this.props.updateNavLinkStatus(name, true);
            } else {
                this.props.updateNavLinkStatus(name, false);
            }
        };

        const pauseThenSwitchPath = (title) => {
            this.props.updateTransitioning();
            const timer = setTimeout(() => {
                this.props.updateCurrPath('/' + title);
                this.props.updateCurrentPageTitle(title);
                this.props.updateTransitioning();
            }, 1000);
            return () => clearTimeout(timer);
        }

        const handleLinkClick = (title) => {
            this.props.updateNavLinkStatus('title', false);
            pauseThenSwitchPath(title);
        }

        return (
            <div className={!sideNavBarOpen ? "side-nav-bar-wrapper close-side-nav-bar":"side-nav-bar-wrapper"}>
                <div className={!sideNavBarOpen ? "side-nav-bar-container hide":"side-nav-bar-container show"}>
                    <div className="link-wrapper" onClick={() => {handleLinkClick("home")}} onMouseEnter={() => {handleMouseOverLink("home")}} onMouseLeave={() => {handleMouseOverLink("home")}}>
                        <div className="link-container home">
                            <h3>HOME</h3>
                            <span className={(this.props.navLinkStatus.home || this.props.currentPageTitle === "home") ? "strike-out":""}></span>
                        </div>
                    </div>
                    <div className="link-wrapper" onClick={() => {handleLinkClick("about")}} onMouseEnter={() => {handleMouseOverLink("about")}} onMouseLeave={() => {handleMouseOverLink("about")}}>
                        <div className="link-container about">
                            <h3>ABOUT</h3>
                            <span className={(this.props.navLinkStatus.about || this.props.currentPageTitle === "about") ? "strike-out":""}></span>
                        </div>
                    </div>
                    <div className="link-wrapper" onClick={() => {handleLinkClick("team")}} onMouseEnter={() => {handleMouseOverLink("team")}} onMouseLeave={() => {handleMouseOverLink("team")}}>
                        <div className="link-container team">
                            <h3>TEAM</h3>
                            <span className={(this.props.navLinkStatus.team || this.props.currentPageTitle === "team") ? "strike-out":""}></span>
                        </div>
                    </div>
                    <div className="link-wrapper" onClick={() => {handleLinkClick("stats")}} onMouseEnter={() => {handleMouseOverLink("stats")}} onMouseLeave={() => {handleMouseOverLink("stats")}}>
                        <div className="link-container stats">
                            <h3>STATS</h3>
                            <span className={(this.props.navLinkStatus.stats || this.props.currentPageTitle === "stats") ? "strike-out":""}></span>
                        </div>
                    </div>
                    <div className="link-wrapper" onClick={() => {handleLinkClick("resources")}} onMouseEnter={() => {handleMouseOverLink("resources")}} onMouseLeave={() => {handleMouseOverLink("resources")}}>
                        <div className="link-container resources">
                            <h3>RESOURCES</h3>
                            <span className={(this.props.navLinkStatus.resources || this.props.currentPageTitle === "resources") ? "strike-out":""}></span>
                        </div>
                    </div>
                    <div className="link-wrapper" onClick={() => {handleLinkClick("contact")}} onMouseEnter={() => {handleMouseOverLink("contact")}} onMouseLeave={() => {handleMouseOverLink("contact")}}>
                        <div className="link-container contact">
                            <h3>CONTACT</h3>
                            <span className={(this.props.navLinkStatus.contact || this.props.currentPageTitle === "contact") ? "strike-out":""}></span>
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default SideNavBar;