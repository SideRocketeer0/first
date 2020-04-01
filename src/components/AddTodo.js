import React from 'react';

export class AddTodo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  render(){
    return(
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
      <input type="text" name="title" style={{flex: '10', padding: 5}} placeholder="Add Todo" value={this.state.title} onChange={this.onChange}/>
      <input type="submit" value="submit" className="btn" style={{flex: '1'}} />
      </form>
    );
  }
}

export default AddTodo