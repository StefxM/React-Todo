// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//- `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

import React from "react";

import Todo from "./components/Todo";

const TodoList = props => {

    return(
        <div className="todo-list">
        {props.todoTasks.map(todos => {
            <Todo key={todos.id} todo={todos} toggleTodo={props.toggleTodo}/>
        })}
        <button className="clearbutton" onclick={props.clearCompleted}>Done</button>
        </div>
    );
};

export default TodoList;