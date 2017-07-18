import React, { Component } from 'react';
import { ToDoItem } from './ToDoItem';

export class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 0, isComplete: false, description: 'Clean'},
        {id: 1, isComplete: true, description: 'Shop'}
      ]
    };

    this.removeToDo = this.removeToDo.bind(this);
  }

  toDoList() {
    return (
      this.state.items.map((item) => (
        <ToDoItem
          description={item.description}
          isComplete={item.isComplete}
          key={item.id}
          id={item.id}
          removeToDo={this.removeToDo}
        />
      ))
    )
  }

  removeToDo(e) {
    console.log(this.state);
    // console.log(this.state.items);
  }

  render() {
    return (
      <div id="todo-list" className="well">
        <h2 className="text-center">ToDo List</h2>
        <h4 className="lead text-center">
          Look at what you have to do!
        </h4>
        <ul className="list-group">
          {this.toDoList()}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
