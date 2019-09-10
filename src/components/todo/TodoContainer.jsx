import React from 'react'
import TodoItem from '../todoitem/TodoItem'
import NewTodoForm from '../NewTodoForm/NewTodoForm'
import './TodoContainer.style.css';

class TodoContainer extends React.Component{
    constructor(){
        super();
        this.state = { todos: []}
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newTodo){
        this.setState({
            todos:[...this.state.todos, newTodo] // adds a new element to the current collection
        })
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    updateTodo(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            //find the element we want to edit
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        })

        this.setState({todos: updatedTodos});
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo => {
            //find the element we want to edit
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })

        this.setState({todos: updatedTodos});

    }

    render(){
        const todos = this.state.todos.map(({task, id, completed}) => 
            <TodoItem  
                key={id} 
                id={id} 
                todo={task} 
                completed={completed}
                removeTodo={this.remove} 
                updateTodo={this.updateTodo}
                toggleTodo={this.toggleCompletion}
            />
        )
        return(
            <div className="todo-container">
                <h1>Todo list!</h1>
                <p>A simple react todo list app</p>
                <ul>{todos}</ul>
                <NewTodoForm createTodo={this.create} />
            </div>
        )
    }
}

export default TodoContainer;