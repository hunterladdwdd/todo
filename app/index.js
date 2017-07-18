import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { ToDoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';

class AppContainer extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ToDoForm />
        <ToDoList />
      </div>
    )
  }
};

ReactDOM.render(
  <AppContainer />,
  document.getElementById('app')
);
