import React from 'react';
import './App.css';
import { useReducer } from "react";
import {reducer, initialState} from "./reducers/reducer"

//componenet imports
import List from "./components/todoList";
import Form from "./components/todoForm";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = (task) => {
    const newTask = {
      item: task,
      completed: false,
      id: Date.now()
    }
    dispatch({type: "ADD_TODO", payload: newTask})
  }

  const toggleTask = (task) => {
    dispatch({type:"TOGGLE_TODO", payload: task})
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form addTask={addTask}/>
      <List state={state.tasks} toggleTask={toggleTask}/>
    </div>
  );
}

export default App;
