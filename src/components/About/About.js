import React from 'react';
import './About.css';

class About extends React.Component {
    componentWillUpdate(nextProps){
        const nextPath = nextProps.currPath;
        const currPath = this.props.currPath;

        if (currPath !== nextPath) {
            this.props.history.push(nextPath);
        }
    }

    sectionClicked = () => {
        if (this.props.sideNavBarOpen) {
         this.props.updateSideNavBarOpen();
        } 
    }
    
    render(){
        return (
            <div className={this.props.transitioning ? "about-wrapper close":"about-wrapper"} onClick={this.sectionClicked}>
                <h1>
                    ABOUT
                </h1>
            </div>
        )
    }
}

export default About;