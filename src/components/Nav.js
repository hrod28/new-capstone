/* eslint-disable */
'use strict';

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


const Nav = React.createClass({
  render: function(){
    const buttonStyle = {
      // backgroundColor: 'transparent',
      color: 'black'
    };
    return(
      <nav>
        <div className="navWrapper">
          <RaisedButton
          className="navButton"
             href="/feed"
             label="Home"
             backgroundColor="red"
           />
           { " " }
          <RaisedButton
          className="navButton"
             href="/myProfile"
             label="My Profile"
             backgroundColor="red"
           />
           { " " }
          <RaisedButton
          className="navButton"
             href="/newPost"
             label="New Project"
             backgroundColor="red"
           />
           { " " }

          <RaisedButton
          className="navButton"
             onClick={this.props.handleLogoutSubmit}
             label="Logout"
             backgroundColor="red"
           />
       </div>
     </nav>


   );
  }


});

export default Nav;
