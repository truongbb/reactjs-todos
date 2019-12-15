import React, {Component} from 'react';
import './App.css';
import {FormInput} from "./components/FormInput";
import './css/Main.css'
import {MainSection} from "./components/MainSection";
import {Footer} from "./components/Footer";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filteredTodos: [],
      isCheckAll: false,
      leftItems: 0
    };

    // this.countActiveTodos = this.countActiveTodos.bind(this);
  };

  addToDo = input_txt => {
    let {todos} = this.state;
    let newTodo = {
      id: this.state.todos.reduce((maxId, e) => Math.max(maxId, e.id), -1) + 1,
      name: input_txt,
      isComplete: false
    }
    let newTodos = [...todos, newTodo];
    let leftItems = newTodos.reduce((activeItems, element) => activeItems + (!element.isComplete ? 1 : 0), 0);
    this.setState({todos: newTodos, filteredTodos: newTodos, leftItems: leftItems});
    // setTimeout(this.countActiveTodos(), 1000);
  };


  deleteTodo = todo_id => {
    let todos = this.state.todos.filter(element => element.id !== todo_id);
    let leftItems = todos.reduce((activeItems, element) => activeItems + (!element.isComplete ? 1 : 0), 0);
    this.setState({todos: todos, filteredTodos: todos, leftItems});
  };

  completeTodo = (todo_id, isCheck) => {
    let todos = this.state.todos.map(element => {
      if (element.id === todo_id) {
        element.isComplete = isCheck;
      }
      return element;
    });
    let allCheck = todos.reduce((checkElement, element) => checkElement + (element.isComplete ? 1 : 0), 0);
    let isCheckAll = allCheck === this.state.todos.length;
    let leftItems = todos.reduce((activeItems, element) => activeItems + (!element.isComplete ? 1 : 0), 0);
    this.setState({todos, isCheckAll, filteredTodos: todos, leftItems});
  };

  completeAllTodo = (isCheckAll) => {
    let todos = this.state.todos.map(element => {
      element.isComplete = isCheckAll ? true : false;
      return element;
    });
    let leftItems = todos.reduce((activeItems, element) => activeItems + (!element.isComplete ? 1 : 0), 0);
    this.setState({todos, isCheckAll, filteredTodos: todos, leftItems});
  };

  clearComplete = () => {
    let todos = this.state.todos.filter(element => !element.isComplete);
    this.setState({todos, isCheckAll: false, filteredTodos: todos});
  };

  filterTodos = (filterCondition) => {
    let filteredTodos = this.state.todos.filter(element =>
      (filterCondition === 'ACTIVE' && !element.isComplete)
      || (filterCondition === 'COMPLETE' && element.isComplete)
      || (filterCondition === 'ALL')
    );
    this.setState({filteredTodos});
  };

  // định viết 1 lần sau đó có action nào tác động tới list todos thì gọi hàm này
  // nhưng sau khi setState lại cho todos rồi gọi thì không được (có lẽ do virtual DOM chưa sinh kịp)
  // countActiveTodos = () => {
  //     let leftItems = this.state.todos.reduce((activeItems, element) => activeItems + (!element.isComplete ? 1 : 0), 0);
  //     this.setState({leftItems});
  // }

  render() {
    return (
      <div className="container">
        <FormInput addToDo={this.addToDo} completeAllTodo={this.completeAllTodo}
                   isCheckAll={this.state.isCheckAll}/>
        <MainSection mainSectionProps={this.state.filteredTodos}
                     deleteTodo={this.deleteTodo}
                     completeTodo={this.completeTodo}/>
        <Footer clearComplete={this.clearComplete}
                filterTodos={this.filterTodos}
                leftItems={this.state.leftItems}/>
      </div>
    );
  };
}

export default App;
