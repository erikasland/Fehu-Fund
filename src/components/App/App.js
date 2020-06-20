import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import SideNavBar from '../SideNavBar/SideNavBar';
import Home from '../Home/Home';
import About from '../About/About';
import Team from '../Team/Team';
import Stats from '../Stats/Stats';
import Resources from '../Resources/Resources';
import Contact from '../Contact/Contact';
import NotFound from '../NotFound/NotFound';
import Background from '../Background/Background';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  state = {
    navLinkStatus: {
        home: false,
        about: false,
        team: false,
        stats: false,
        resources: false,
        contact: false
    },
    logoVisibilityConfig: {
      currentLogo: "logoOne",
      logoVisibility: {
        logoOne: true,
        logoTwo: false,
        logoThree: false,
        logoFour: false,
        logoFive: false
      }
  },
    transitioning: false,
    currentPageTitle: (window.location.pathname.substr(0) !== "/" ? window.location.pathname.substr(1) : "home"),
    sideNavBarOpen: false,
    currPath: window.location.pathname
  }

  updateCurrPath = (route) => {
    this.setState({
        currPath: route
    });
  };

  updateNavLinkStatus = (linkTitle, status) => {
    const links = {...this.state.navLinkStatus};
    links[linkTitle] = status;
    
    this.setState({
        navLinkStatus: links
    });
  };

  updateSideNavBarOpen = () => {
    this.setState({
      sideNavBarOpen: !this.state.sideNavBarOpen
    });
  };

  updateCurrentPageTitle = (title) => {
    this.setState({
      currentPageTitle: title
    })
  };

  updateTransitioning = () => {
    this.setState({
      transitioning: !this.state.transitioning
    });
  }

  updateFFLogoVisibility = () => {
    let randomIdx = Math.floor(Math.random() * 5);
    const classNames = ["logoOne", "logoTwo", "logoThree", "logoFour", "logoFive"];
    const logoVisibility = {...this.state.logoVisibilityConfig.logoVisibility};

    if(this.state.logoVisibilityConfig.currentLogo === classNames[randomIdx]){
      if(randomIdx < 1) {
        randomIdx = randomIdx + 1;
      }else {
        randomIdx = randomIdx - 1;
      }
    }

    logoVisibility[this.state.logoVisibilityConfig.currentLogo] = false;
    logoVisibility[classNames[randomIdx]] = true;

    this.setState({
      logoVisibilityConfig: {
        currentLogo: classNames[randomIdx],
        logoVisibility: logoVisibility
      }
    });
  }
  
  render () {
    return (
      <div className="App">
        <Navigation updateSideNavBarOpen={this.updateSideNavBarOpen} sideNavBarOpen={this.state.sideNavBarOpen} currentPageTitle={this.state.currentPageTitle} />
        <SideNavBar updateTransitioning={this.updateTransitioning} transitioning={this.state.transitioning} updateCurrPath={this.updateCurrPath} updateCurrentPageTitle={this.updateCurrentPageTitle} sideNavBarOpen={this.state.sideNavBarOpen} currentPageTitle={this.state.currentPageTitle} navLinkStatus={this.state.navLinkStatus} updateNavLinkStatus={this.updateNavLinkStatus} />
        <Background />
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={(props) => <Home transitioning={this.state.transitioning} logoVisibility={this.state.logoVisibilityConfig.logoVisibility} updateFFLogoVisibility={this.updateFFLogoVisibility} navLinkStatus={this.state.navLinkStatus} history={props.history} updateSideNavBarOpen={this.updateSideNavBarOpen} currPath={this.state.currPath} updateCurrPath={this.updateCurrPath} sideNavBarOpen={this.state.sideNavBarOpen}/>}></Route>
                <Route exact path='/home' render={(props) => <Home transitioning={this.state.transitioning} logoVisibility={this.state.logoVisibilityConfig.logoVisibility} updateFFLogoVisibility={this.updateFFLogoVisibility} navLinkStatus={this.state.navLinkStatus} history={props.history} updateSideNavBarOpen={this.updateSideNavBarOpen} currPath={this.state.currPath} updateCurrPath={this.updateCurrPath} sideNavBarOpen={this.state.sideNavBarOpen}/>}></Route>
                <Route exact path='/about' render={(props) => <About transitioning={this.state.transitioning} history={props.history} currPath={this.state.currPath} updateSideNavBarOpen={this.updateSideNavBarOpen} updateCurrPath={this.updateCurrPath} sideNavBarOpen={this.state.sideNavBarOpen}/>}></Route>
                <Route exact path='/team' render={(props) => <Team transitioning={this.state.transitioning} history={props.history} currPath={this.state.currPath} updateSideNavBarOpen={this.updateSideNavBarOpen} updateCurrPath={this.updateCurrPath} sideNavBarOpen={this.state.sideNavBarOpen}/>}></Route>
                <Route exact path='/stats' render={(props) => <Stats transitioning={this.state.transitioning} history={props.history} currPath={this.state.currPath} updateSideNavBarOpen={this.updateSideNavBarOpen} updateCurrPath={this.updateCurrPath} sideNavBarOpen={this.state.sideNavBarOpen}/>}></Route>
                <Route exact path='/resources' render={(props) => <Resources transitioning={this.state.transitioning} history={props.history} currPath={this.state.currPath} updateSideNavBarOpen={this.updateSideNavBarOpen} updateCurrPath={this.updateCurrPath} sideNavBarOpen={this.state.sideNavBarOpen}/>}></Route>
                <Route exact path='/contact' render={(props) => <Contact transitioning={this.state.transitioning} history={props.history} currPath={this.state.currPath} updateSideNavBarOpen={this.updateSideNavBarOpen} updateCurrPath={this.updateCurrPath} sideNavBarOpen={this.state.sideNavBarOpen}/>}></Route>
                <Route exact path='/*' render={(props) => <NotFound transitioning={this.state.transitioning} history={props.history} updateSideNavBarOpen={this.updateSideNavBarOpen} currPath={this.state.currPath} updateCurrPath={this.updateCurrPath} sideNavBarOpen={this.state.sideNavBarOpen}/>}></Route>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;