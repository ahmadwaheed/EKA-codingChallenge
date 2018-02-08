import React from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route} from "react-router-dom";
import { updateStreetAddress, updateCity, updateState, updateZipCode, sendPostRequest} from '../actions/formThreeActionCreators.js';
import $ from 'jquery';
import App from '../components/App.jsx';

class FormThree extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      redirect3: false
    }
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

    this.setState({redirect3: true});
  }

  render() {
    if (this.state.redirect3 === false) {
      return (
        <div className="form-three">
        <form onSubmit={this.handleSubmit}>
           <label>street address:</label><input type="text" id="street" onChange={() => this.handleChange('street')} /><br/>
           <label>city:</label> <input type="text" id="city" onChange={() => this.handleChange('city')} /><br/>
           <label>state:</label><input type="text" id="state" onChange={() => this.handleChange('state')} /><br/>
           <label>zipCode:</label><input type="text" id="zipCode" onChange={() => this.handleChange('zipCode')} /><br/>
          <input className="submit" type="submit" value="Submit" />
        </form>
        </div>
      );
    } else {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Route component={App}/>
            </div>
          </BrowserRouter>
        </div>
      );
    }
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