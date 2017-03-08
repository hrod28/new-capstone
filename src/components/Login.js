'use strict';
/* eslint-disable */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const styles = {
  errorStyle: {
    color: "red",
  },
  underlineStyle: {
    borderColor: "red",
  },
  floatingLabelStyle: {
    color: "red",
  },
  floatingLabelFocusStyle: {
    color: "red",
  },
};

const LoginForm = React.createClass({
  render(){

    return(

      <div className="row center">
        <form onSubmit={this.props.handleLoginSubmit}>
          {/* <RaisedButton label="Username" /> */}
          {/* <div className="col-l-6"> */}
          <TextField
            floatingLabelText="Username"
            type="text"
            value={this.props.username}
            onChange={this.props.handleUsername}
            id="username"
            className="marginRight"
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
          {/* </div> */}
          {/* <div className="col-l-6"> */}
          <TextField
            floatingLabelText="Password"
            type="password"
            value={this.props.password}
            onChange={this.props.handlePassword}
            className="marginRight"
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
          {/* </div> */}
          <RaisedButton label="Log in"
            type="submit"
            value="Login"
            id="submit"
            backgroundColor="red"
          />
          {/* <input type="submit" value="Login" id="submit"/> */}
        </form>
      </div>

    );
  }
});

export default LoginForm;
