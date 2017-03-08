/* eslint-disable */
'use strict';

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const Nav1 = React.createClass({
  render: function(){
    return(
     <nav>
       <div className="navWrapper">
       
          <RaisedButton
           href="/profile"
           label="Regster Here"
           />
       </div>
     </nav>
   );
  }


});

export default Nav1;
