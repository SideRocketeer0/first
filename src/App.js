import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import {divStyle, div2Style} from './styles/styles';
import './App.css';
import {v4 as uuid} from "uuid";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
      {
        id: uuid(),
        title: 'Take out bins',
        completed: false
      },
      {
        id: uuid(),
        title: 'do homework',
        completed: false
      },
      {
        id: uuid(),
        title: 'exersize',
        completed: false
      }
    ]};

    this.complete = this.complete.bind(this);
    this.delete = this.delete.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }




  //Toggle Complete
  complete(id){
    //change to use a for in loop, might be more efficient
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id == id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  //Delete Todo
  delete(id){
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !=id)]
    });
  }

  //Add Todo
  addTodo(title){
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    };
    this.setState({todos: [...this.state.todos, newTodo]});
  }

render(){
  return (
    <div className="App" style={divStyle}>
    <div className="container" style={div2Style}>
    <Header />
    <AddTodo addTodo={this.addTodo} />
    <Todos todos={this.state.todos} complete={this.complete} delete={this.delete}/>
    </div>
    </div>
  );
}
}
export default App;
