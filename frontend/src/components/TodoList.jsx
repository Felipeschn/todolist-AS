import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Api from '../api.js';
import { pegaUsuarioLogado } from '../services/usuarioLogado';


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState();

  function pegaUser() {
    setUsuarioLogado(pegaUsuarioLogado());
  }

  useEffect(() => {
    pegaUser();
    Api.get("/Tarefas/").then((response) => {
      setTodos(response.data)
    });
  }, [])

  console.log(usuarioLogado);

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