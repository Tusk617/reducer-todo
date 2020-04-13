import React from 'react';
import './App.css';

//componenet imports
import List from "./components/todoList";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <List />
    </div>
  );
}

export default App;
