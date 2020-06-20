import React from 'react';
import './Background.css'

class Background extends React.Component {
    backgroundImgClasses = [
        "background-img bison",
        "background-img stonks-two",
        "background-img code",
        "background-img viking"
    ]

    activeBackgroundImg = this.backgroundImgClasses[0];
    currentBackgroundIdx = 0;

    switchBackground = () => {
        setInterval(() => {
            if (this.currentBackgroundIdx === this.backgroundImgClasses.length) {
                this.currentBackgroundIdx = 0;
                this.activeBackgroundImg = this.backgroundImgClasses[this.currentBackgroundIdx];
            } else {
                this.activeBackgroundImg = this.backgroundImgClasses[this.currentBackgroundIdx++];
            }
        }, 15000);
    }

    componentDidMount() {
        this.switchBackground();
    }

    render() {
            return (
                <div className={this.activeBackgroundImg}></div>
            )
        }
}

export default Background;