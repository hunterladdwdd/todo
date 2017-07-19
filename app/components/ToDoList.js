import React, { Component } from 'react';

import { ToDoItem } from './ToDoItem';

export class ToDoList extends Component {
  render() {
    return (
      <div id="todo-list" className="well">
        <h2 className="text-center">ToDo List</h2>
        <h4 className="lead text-center">
          Look at what you have to do!
        </h4>
        <ul className="list-group">
          <ToDoItem description="Clean room!" />
        </ul>
      </div>
    );
  }
}

export default ToDoList;
