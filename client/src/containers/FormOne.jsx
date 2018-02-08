import React from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUserName, updatePassword, updateEmail, sendPostRequest} from '../actions/formOneActionCreators.js';
import $ from 'jquery';
import { BrowserRouter, Route} from "react-router-dom";
import FormTwo from './FormTwo.jsx';

class FormOne extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      redirect1: false 
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event === 'userName') {
      return this.props.updateUserName($('#userName').val());
    }
   
    if (event === 'password') {
     return this.props.updatePassword($('#password').val());
    }

    if (event === 'email') {
      return this.props.updateEmail($('#email').val());
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendPostRequest({
      userName: this.props.userName, 
      password: this.props.password, 
      email: this.props.email
    });

    this.setState({ redirect1: true});
  }

  render() {
    if (this.state.redirect1 === false) {
      return (
        <div className="form-one">
        <form onSubmit={this.handleSubmit}>
          <label>username:</label> <input type="text" id="userName" onChange={() => this.handleChange('userName')} /><br/>
          <label>password: </label><input type="text" id="password" onChange={() => this.handleChange('password')} /><br/>
          <label> email: </label> <input type="text" id="email" onChange={() => this.handleChange('email')} /><br/>
          <input className="submit" type="submit" value="Submit" />
        </form>
        </div>
      );
    } else {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Route component={FormTwo}/>
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    userName: state.userName, 
    password: state.password, 
    email: state.email
  };
}

function matchDisptachToProps(dispatch) {
  return bindActionCreators({
    updateUserName: updateUserName, 
    updatePassword: updatePassword,
    updateEmail: updateEmail, 
    sendPostRequest: sendPostRequest
  }, dispatch);
}

export default connect(mapStateToProps, matchDisptachToProps)(FormOne);