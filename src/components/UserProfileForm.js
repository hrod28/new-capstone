/* eslint-disable */ 
'use strict';
import React from 'react';
import { Router, browserHistory, location } from 'react-router'
//import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
// import CardActions from 'material-ui/Card/CardActions';
// import CardHeader from 'material-ui/Card/CardHeader';
// import CardMedia from 'material-ui/Card/CardMedia';
// import CardTitle from 'material-ui/Card/CardTitle';
// import CardText from 'material-ui/Card/CardText';
// import Avatar from 'material-ui/Avatar/Avatar';
import {orange500, blue500} from 'material-ui/styles/colors';

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
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const ProfileForm = React.createClass({

  componentDidMount(){
    console.log(this.props.disabled);
  },

  componentWillReceiveProps(nextProps) {
    this.setState({...nextProps.profileData});
    this.setState(nextProps.disabled);
  },

  disableFields(){
    var location = browserHistory.getCurrentLocation();
    console.log(location, this.state);
    if (location === "/myProfile"){
      this.setState({disabled:true});
      console.log(location, this.state);
    }
  },

  handleSubmit(e) {
    console.log('handleSubmit');
    e.preventDefault();

    var formData = {...this.state};

    this.props.onProfileSubmit(formData);
  },

  setValue: function (field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  },


  render: function(){
    return(

      <Card className="uiCard">
        <div className="profileContainer">
          <h3>Please Enter Your Information</h3>
          <form onSubmit={this.handleSubmit}>

            <div className="row">
              <div className="col-md-5 col-md-offset-1 col-lg-offset-1">
                <TextField className="profileTextArea" type="text" value={this.state.username} onChange={this.setValue.bind(this, 'username')}
                  id="username" floatingLabelText="Username" disabled={this.props.disabled}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
              <div className="col-sm-offset-2 col-md-offset-1 col-md-5 col-lg-offset-1">
                <TextField className="profileTextArea" type="password" floatingLabelText="Password" id="password" value={this.state.password} onChange={this.setValue.bind(this, 'password')} hidden={this.props.disabled} disabled={this.props.disabled}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  />
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 col-md-offset-1 col-lg-offset-1">
                <TextField className="profileTextArea" type="text"
                  id="firstname" floatingLabelText="First Name" onChange={this.setValue.bind(this, 'firstName')} value={this.state.firstName}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
              <div className="col-sm-offset-2 col-md-offset-1 col-md-5 col-lg-offset-1">
                <TextField className="profileTextArea" type="text"
                  id="lastname" floatingLabelText="Last Name" onChange={this.setValue.bind(this, 'lastName')} value={this.state.lastName}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-offset-2 col-md-offset-1 col-md-5 col-lg-offset-1">
                <TextField className="profileTextArea" type="text" floatingLabelText="Email Address" value={this.state.email} onChange={this.setValue.bind(this, 'email')} disabled={this.props.disabled}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
              </div>
            </div>


                <div className="row">
                  <div className="col-sm-12 profileSubmitButton">
                    <Button type="submit" label="Submit"
                    className="buttonBackground"
                    backgroundColor="red" />
                  </div>
              </div>
          </form>
        </div>
      </Card>

    );
  }
});

export default ProfileForm;
