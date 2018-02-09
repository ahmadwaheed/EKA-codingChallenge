import React from 'react';
import FormOne from "../containers/FormOne.jsx";
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landingPage: true
    }

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({
      landingPage: false
    })
  }

  render() {
    if (this.state.landingPage === true) {
      var button = (
        <div>
          <RaisedButton 
            label="signUp"
            onClick={() => this.toggleState()}/>
        </div>
      );
      return (
        <div >
          <MuiThemeProvider>
            <AppBar
              title="EKA coding Challenge"
              iconElementRight={button}
            />
          </MuiThemeProvider>
            <h2 align="center">Welcome!</h2>
            <h3 align="center">Please press SIGNUP button to continue</h3>
        </div>
      );
    } else {
      return (
        <div>
           <FormOne />
        </div>
      );
    }
  }
}

export default App