import React, { Component } from 'react';

export class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.description,
      isComplete: props.isComplete
    };

    this.toggleCompleteness = this.toggleCompleteness.bind(this);
  }

  // Updates the completeness of the item
  toggleCompleteness() {
    if (this.state.isComplete == true) {
      this.setState({isComplete: false});
    } else {
      this.setState({isComplete: true});
    }
  }

  // Adds a disabled class to the list element
  completeSelector() {
    if (this.state.isComplete == true) {
      return ('lead list-group-item disabled')
    } else {
      return ('lead list-group-item');
    }
  }

  // Handles updating the text of the complete button
  completeText() {
    if (this.state.isComplete == true) {
      return ('Completed');
    } else {
      return ('Complete');
    }
  }

  render() {
    return (
      <li className={this.completeSelector()}>
        {this.props.description}
        <div className="btn-group pull-right" role="group" aria-label="...">
          <button onClick={this.toggleCompleteness} type="button" className="btn btn-sm btn-primary">
            <span className="glyphicon glyphicon-ok"></span>  {this.completeText()}
          </button>
          <button onClick={this.props.removeToDo} type="button" className="btn btn-sm btn-danger">
            <span className="glyphicon glyphicon-minus"></span>  Remove
          </button>
        </div>
      </li>
    );
  }
}

export default ToDoItem;
