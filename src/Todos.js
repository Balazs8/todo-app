import React, { useState } from 'react';
import { useTodo } from './TodoContext';

const Todos = () => {
  const { state, dispatch } = useTodo();
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo) {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
    }
  };

  const completeTodo = (todo) => {
    dispatch({ type: 'COMPLETE_TODO', payload: todo });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => completeTodo(todo)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
