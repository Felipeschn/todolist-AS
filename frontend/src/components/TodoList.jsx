import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Api from '../api.js';


function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('entrou');
    Api.get("/Tarefas").then((response) => {
      setTodos(response.data)
    });
  }, [])

  return (
    <>
      <h1>Qual sua tarefa para hoje?</h1>
      <TodoForm />
      <Todo
        todos={todos}
      />

    </>
  );
}

export default TodoList;