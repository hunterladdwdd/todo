import React, { Component } from 'react';

import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';

export class ToDoDataStore extends Component {
  constructor(props) {
    super(props);

    this.toDoItems = [];
  }

  getToDos() {
    return this.toDoItems.map(toDoItem => toDoItem);
  }

  addToDoItem(description) {
    const toDoItem = new ToDoItem(description);
    this.todos.push(toDoItem);
  }

  removeToDoItem(toDoItemId) {
    const id = findIndex(this.todos, (todo) => todo.id === toDoItemId);
  }
}

export default ToDoDataStore;
