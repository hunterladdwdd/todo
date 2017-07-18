import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div id="header" className="page-header">
        <h1>
          ToDo <small>a simple React app for creating todo lists</small>
        </h1>
      </div>
    );
  }
}

export default Header;
