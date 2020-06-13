import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todoTasks = [
  {
    task: 'Organize Garage', // title
    id: 1528817077286, //time stamp - `Date.now()`
    completed: false//completed toggle
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
      task: 'Wash Dishes',
      id: 1528817084361,
      completed: false
  },
  {
      task: 'Laundry',
      id: 1528817084364,
      completed: false
  },
  {
      task: 'Meal Prep',
      id: 1528817084366,
      completed: false
  },
  {
      task: 'Set up App',
      id: 1528817084369,
      completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      todoTasks:todoTasks
    };
  }

    addTodo = (e, todo) => {
      e.preventDefault();
      const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
      };
      this.setState({
        todoTasks: [...this.state.todoTasks, newTodo]
      });
    };

    toggleTodo = todoId => {
      console.log(todoId);
      this.setState({
        todoTasks: this.state.todoTasks.map(todo => {
          if (todoId === todo.id ) {
            return {
              ...todo, completed: !todo.completed
            };
          }
          return todo;
        })
      });
    };
    clearCompleted = e => {
      e.preventDefault();
      this.setState({
        todoTasks: this.state.todoTasks.filter(todo => !todo.completed)
      });
    };

  render() {
    console.log(this.state.todoTasks);
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to T0D0</h1>
          <TodoForm addTodo={this.addTodo}
          />
      </div>
      <TodoList
        todoTasks={this.state.todoTasks}
        toggleTodo={this.toggleTodo}
        clearCompleted={this.clearCompleted}
        />
        </div>
    );
  }
}

export default App;
