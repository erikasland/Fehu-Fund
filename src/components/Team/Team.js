import React from 'react';
import './Team.css';
class Team extends React.Component {
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
            <div className={this.props.transitioning ? "team-wrapper close":"team-wrapper"} onClick={this.sectionClicked}>
                <h1>
                    Team
                </h1>
            </div>
        )
    }
}

export default Team;