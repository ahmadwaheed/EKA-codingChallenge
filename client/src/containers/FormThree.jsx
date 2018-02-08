import React from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateStreetAddress, updateCity, updateState, updateZipCode, sendPostRequest} from '../actions/formThreeActionCreators.js';
import $ from 'jquery';

class FormThree extends React.Component {
 constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event === 'street') {
      return this.props.updateStreetAddress($('#street').val());
    }
   
    if (event === 'city') {
     return this.props.updateCity($('#city').val());
    }

    if (event === 'state') {
      return this.props.updateState($('#state').val());
    }

    if (event === 'zipCode') {
      return this.props.updateZipCode($('#zipCode').val());
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendPostRequest({
      streetAddress: this.props.streetAddress, 
      city: this.props.city, 
      state: this.props.state, 
      zipCode: this.props.zipCode
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" id="street" onChange={() => this.handleChange('street')} />
          <input type="text" id="city" onChange={() => this.handleChange('city')} />
          <input type="text" id="state" onChange={() => this.handleChange('state')} />
          <input type="text" id="zipCode" onChange={() => this.handleChange('zipCode')} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


function mapStateToProps(state) {
  return { 
   streetAddress: state.streetAddress,
   city: state.city,
   state: state.state,
   zipCode: state.zipCode 
  };
}

function matchDisptachToProps(dispatch) {
  return bindActionCreators({
    updateStreetAddress: updateStreetAddress, 
    updateCity: updateCity,
    updateState: updateState, 
    updateZipCode: updateZipCode, 
    sendPostRequest: sendPostRequest
  }, dispatch);
}

export default connect(mapStateToProps, matchDisptachToProps)(FormThree);