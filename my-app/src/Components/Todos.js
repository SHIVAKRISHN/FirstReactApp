import React, { Component } from 'react';
import TodoItem from './TodoItem';






class Todos extends Component {
    deleteProject(id)
    {
this.props.onDelete(id);
    }
  
    render() {

    let todoItems;

    if(this.props.todos)
    {
        todoItems = this.props.todos.map(
            todo =>{
                //console.log(project);
                return (
                  <TodoItem  key={todo.title} todo={todo} />
                );
            }
        )
    }
    return (
      <div className="Todos">
        
        <h3>
      ToDo List
        </h3>
        
        {todoItems}

        

      </div>
      
    );
  }
}

export default Todos;
