import React from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import SideBar from './sidebar/SideBar';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <SideBar />
      </div>
    );
  }
}

