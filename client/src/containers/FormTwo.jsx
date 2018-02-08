import React from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route} from "react-router-dom";
import FormThree from './FormThree.jsx';
import { updateFirstName, updateLastName, updatePhoneNumber, sendPostRequest, toggleRedirect} from '../actions/formTwoActionCreators.js';
import $ from 'jquery';

class FormTwo extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      redirect2: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    if (event === 'firstName') {
      return this.props.updateFirstName($('#firstName').val());
    }
   
    if (event === 'lastName') {
     return this.props.updateLastName($('#lastName').val());
    }

    if (event === 'phoneNumber') {
      return this.props.updatePhoneNumber($('#phoneNumber').val());
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendPostRequest({
      firstName: this.props.firstName, 
      lastName: this.props.lastName, 
      phoneNumber: this.props.phoneNumber
    });

    this.setState({
      redirect2: true
    })
  }

  render() {
    if (this.state.redirect2 === false) {
      return (
        <div className="form-two">
        <form onSubmit={this.handleSubmit}>
            <label>first name:</label><input type="text" id="firstName" onChange={() => this.handleChange('firstName')} /><br/>
            <label>last name:</label><input type="text" id="lastName" onChange={() => this.handleChange('lastName')} /><br/>
           <label>phone number:</label> <input type="text" id="phoneNumber" onChange={() => this.handleChange('phoneNumber')} /><br/>
          <input className="submit" type="submit" value="Submit" />
        </form>
        </div>
      );
     } else {
      return (
        <div>
          <BrowserRouter>
            <Route component={FormThree}/>
          </BrowserRouter>
        </div>
      );
    } 
  }
}

function mapStateToProps(state) {
  return {
    firstName: state.firstName, 
    lastName: state.lastName, 
    phoneNumber: state.phoneNumber, 
    redirect: state.redirect
  };
}

function matchDisptachToProps(dispatch) {
  return bindActionCreators({
    updateFirstName: updateFirstName, 
    updateLastName: updateLastName,
    updatePhoneNumber: updatePhoneNumber, 
    sendPostRequest: sendPostRequest, 
    toggleRedirect: toggleRedirect
  }, dispatch);
}

export default connect(mapStateToProps, matchDisptachToProps)(FormTwo);