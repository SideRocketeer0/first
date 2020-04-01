import React from 'react';
import {TodoItem} from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component{


  render(){
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo = {todo} complete={this.props.complete} delete={this.props.delete}/>

    ));
  }
}

//propTypes mostly for documentation and if required
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
