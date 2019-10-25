import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as todoActions from "./actions/todo";

class TodoList extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  state = {
    newTodoText: ""
  };

  AddNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);

    this.setState({ newTodoText: "" });
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>

        <input
          type="Text"
          value={this.state.newTodoText}
          onChange={e => this.setState({ newTodoText: e.target.value })}
        />
        <button onClick={this.AddNewTodo}>Novo Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
