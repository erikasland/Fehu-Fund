import React from 'react';
import './Contact.css';

class Contact extends React.Component {
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
            <div className={this.props.transitioning ? "contact-wrapper close":"contact-wrapper"} onClick={this.sectionClicked}>
                <h1>
                    Contact
                </h1>
            </div>
        )
    }
}

export default Contact;