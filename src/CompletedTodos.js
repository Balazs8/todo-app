import React from 'react';
import { useTodo } from './TodoContext';

const CompletedTodos = () => {
  const { state, dispatch } = useTodo();

  const deleteCompletedTodo = (todo) => {
    dispatch({ type: 'DELETE_COMPLETED_TODO', payload: todo });
  };

  return (
    <div>
      <h2>Completed Todos</h2>
      <ul>
        {state.completedTodos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => deleteCompletedTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTodos;
