import React from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateFirstName, updateLastName, updatePhoneNumber, sendPostRequest} from '../actions/formTwoActionCreators.js';
import $ from 'jquery';

class FormTwo extends React.Component {
 constructor(props) {
    super(props);

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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" id="firstName" onChange={() => this.handleChange('firstName')} />
          <input type="text" id="lastName" onChange={() => this.handleChange('lastName')} />
          <input type="text" id="phoneNumber" onChange={() => this.handleChange('phoneNumber')} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


function mapStateToProps(state) {
  return {
    firstName: state.firstName, 
    lastName: state.lastName, 
    phoneNumber: state.phoneNumber
  };
}

function matchDisptachToProps(dispatch) {
  return bindActionCreators({
    updateFirstName: updateFirstName, 
    updateLastName: updateLastName,
    updatePhoneNumber: updatePhoneNumber, 
    sendPostRequest: sendPostRequest 
  }, dispatch);
}

export default connect(mapStateToProps, matchDisptachToProps)(FormTwo);