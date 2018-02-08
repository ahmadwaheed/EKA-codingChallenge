import React from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUserName, updatePassword, updateEmail, sendPostRequest} from '../actions/formOneActionCreators.js';
import $ from 'jquery';

class Login extends React.Component {
 constructor(props) {
    super(props);

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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" id="userName" onChange={() => this.handleChange('userName')} />
          <input type="text" id="password" onChange={() => this.handleChange('password')} />
          <input type="text" id="email" onChange={() => this.handleChange('email')} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
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

export default connect(mapStateToProps, matchDisptachToProps)(Login);