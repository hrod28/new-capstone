'use strict';
import React from 'react';
import { Router, browserHistory} from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import request from 'superagent';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
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
  }
};

var DATABASE_URL = 'https://cap-backend.herokuapp.com';

var CreatePost = React.createClass({
  getInitialState () {
    return({
      title: '',
      post_body: '',
    });
  },

  // ONCHANGE HANDLERS -----------------------

  post_bodyHandleChange(event) {
    this.setState({post_body: event.target.value});
    console.log(this.state);
  },

  handleSubmit(event) {
    event.preventDefault();

    let postObjToSend = {
      post_body: this.state.post_body,
    };

    request
    .post(DATABASE_URL+`/api/posts/2`)
    .send(postObjToSend)
    .end((err,res)=>{
      if (err || !res.ok) {
        console.log('ERROR: ', err);
      } else {
        console.log(res.body);
        browserHistory.push('/feed');
      }
    });
  },

  render: function () {


    return (
      <Card className="uiCard">
        <div className="newPostContainer">
          <form onSubmit={this.handleSubmit}>
            <h3>Join the discussion!</h3>
            <h4>Use this form to Post Something New</h4>
            <div className="row newPostPadding">
              <label>
                <TextField
                  className="postFormTitle"
                  id="newPostTitle"
                  type="text"
                  name="postTitle"
                  floatingLabelText="Title"
                  value={this.state.title}
                  onChange={this.titleHandleChange}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  required
                />
              </label>
            </div>
            <div className="row">
              <div className="newPostPadding">
                <label>
                  <TextField
                    className="postFormpost_body"
                    multiLine={true} rows={1} rowsMax={5}
                    id=""
                    type="text"
                    name="postpost_body"
                    floatingLabelText="post_body"
                    value={this.state.post_body}
                    onChange={this.post_bodyHandleChange}
                    underlineFocusStyle={styles.underlineStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    required
                  />
                </label>
              </div>
            </div>

            <RaisedButton
              className="postSubmitButton"
              backgroundColor="red"
              type="submit"
              value="submit">Submit</RaisedButton>
      </form>
      </div>
      </Card>
    );
  }
});

export default CreatePost;
