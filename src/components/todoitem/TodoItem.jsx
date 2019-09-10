import React from 'react'
import './Todoitem.style.css'
class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.todo,
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove(){
        this.props.removeTodo(this.props.id);
    }

    toggleForm(){
        this.setState({isEditing: !this.state.isEditing})
    }

    handleUpdate(event){
        event.preventDefault();
        //take new task data and pass up to parent
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({isEditing: false});
    }
    handleChange(event){
        this.setState({task : event.target.value});

    }

    handleToggle(){
        this.props.toggleTodo(this.props.id);
    }

    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div className="Todo">
                    <form onSubmit={this.handleUpdate}>
                        <input type='text' value={this.state.task} onChange={this.handleChange}/>
                        <button>save</button>
                    </form>
                </div>
            )
        } else{
            result = (
                <div className="Todo">
                    <li onClick={this.handleToggle} className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}>
                        {this.props.todo}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.handleRemove}>delete</button>
                        <button onClick={this.toggleForm}>edit</button>
                    </div>
            </div>
            )
        }
        return result;
    }
}

    
export default TodoItem;