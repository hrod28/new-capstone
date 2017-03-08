/* eslint-disable */
'use strict';
import React from 'react';
import request from 'superagent';
import LoginForm from '../components/Login.js';
import Nav from '../components/Nav.js';
import Nav1 from '../components/Navlogin.js';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Carousel from 'react-bootstrap/lib/Carousel';

var DATABASE_URL = 'https://cap-backend.herokuapp.com';

var landingContainer = React.createClass({

    getInitialState(){
      return ({
        username: '',
        password: ''
      });
    },

    componentDidMount(){
      console.log(this.state);
    },

    handleUsername(event){
      console.log('username change')
      this.setState({username:event.target.value})
    },
    handlePassword(event){
      this.setState({password:event.target.value})
    },

    handleLogoutSubmit(event){
      //alert('hi');
      event.preventDefault();
      sessionStorage.removeItem('id');
      browserHistory.push('/');
    },

    handleLoginSubmit(event){
      event.preventDefault();
      request
      .get(DATABASE_URL + '/api/users/username/' + this.state.username)
        .end(function(err, res){
          if(err){
            console.log('error getting username', err);
          }
          else{
          console.log(res)
          sessionStorage.setItem('id', res.body.id);
          browserHistory.push('/feed');

          }
      });
    },



render: function(){
    var login = (true) ?
    <LoginForm
      username={this.state.username}
      password={this.state.password}
      handleUsername={this.handleUsername}
      handlePassword={this.handlePassword}
      handleLoginSubmit={this.handleLoginSubmit}
    /> : null;



      const isLogged = (sessionStorage.id) ?
        <Nav
          handleLogoutSubmit={this.handleLogoutSubmit} />
          :
        <Nav1
          handleLoginSubmit={this.handleLoginSubmit}/>



  return(
      <div>
      {isLogged}
      {login}
        <div className="postsContainer">
          </div>
          <Carousel>
            <Carousel.Item>
            <Carousel.Caption>
                <h1 className="landingCarouselHeader">Chef Challenge for Children</h1>
                <h2 className="primaryLandingCarouselParagraph">Eat   *   Vote   *   Party</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h1 className="landingCarouselHeader">For the Kids!</h1>
                <h2 className="secondaryLandingCarouselParagraph">Be the a part of the postitive change in your community!</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h1 className="landingCarouselHeader">Silent Auction Sneak Peek!</h1>
                <h2 className="secondaryLandingCarouselParagraph">Get an early preview of our silent auction!</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </div>
  );
  }
});

export default landingContainer;
