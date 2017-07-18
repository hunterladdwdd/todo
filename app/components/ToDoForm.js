import React, { Component } from 'react';

export class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    console.log(this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <div id="todo-form" className="well">
        <h2 className="text-center">Add a New Task</h2>
        <h4 className="lead text-center">What do you need to do?</h4>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <input type="text" name="new-todo" value={this.state.value} onChange={this.handleChange} placeholder="Start typing out your new task!" className="form-control" />
          </div>
          <button type="submit" className="btn btn-success center-block">Create your new task!</button>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
