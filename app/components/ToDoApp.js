import React, { Component } from 'react';

import { Header } from './Header';
import { ToDoForm } from './ToDoForm';
import { ToDoList } from './ToDoList';

export class ToDoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems: this.props.toDoDataStore.getToDos()
    };
  }

  addToDoItem(props) {
    this.props.addToDoItem(this.props.value);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <ToDoForm />
        <ToDoList toDoItems={this.state.toDoItems} />
      </div>
    )
  }
}

export default ToDoApp;
