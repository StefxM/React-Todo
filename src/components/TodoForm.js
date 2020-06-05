//- `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//- Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//- Once a todo is submitted, the Todo List should re-render and show the added todo.
import React from "react"; 

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitTodo = e => {
        e.preventDefault();
        this.setState({ todo:'' });
        this.props.addTodo(e, this.state.todo);
    };

    render(){
        return(
            <form onSubmit={this.submitTodo}>
                <input
                    type="text"
                    value={this.state.todo}
                    name="task"
                    onChange={this.handleChanges}/>
                <button>Add</button>
            </form>
        );
    }
}
export default TodoForm;