import React, { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

const initialState = {
  todos: [],
  completedTodos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
        completedTodos: [...state.completedTodos, action.payload],
      };
    case 'DELETE_COMPLETED_TODO':
      return {
        ...state,
        completedTodos: state.completedTodos.filter((todo) => todo !== action.payload),
      };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
