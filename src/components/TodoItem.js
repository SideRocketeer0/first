import React from 'react';
import PropTypes from 'prop-types';
import {todoItemStyle, removeStyle} from '../styles/styles';

export class TodoItem extends React.Component{

  getStyle = () =>{
    return{
      background: todoItemStyle.background,
      padding: todoItemStyle.padding,
      borderBottom: todoItemStyle.borderBottom,
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }



  render(){
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
      <p>

      <input type="checkbox" onChange={/*change this to not use bind here*/this.props.complete.bind(this, id)} />
      {title}
      <button onClick={this.props.delete.bind(this, id)} style={removeStyle}>Remove</button>
      </p>
      </div>
    );
  }
}


TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
