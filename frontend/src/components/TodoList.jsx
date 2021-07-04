import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Api from '../api.js';
import {
  pegaUsuarioLogado
} from "../services/usuarioLogado.js";

var user = pegaUsuarioLogado();

function TodoList() {
  const [todos, setTodos] = useState([]);
  var todo = [];

  useEffect(() => {
    user = pegaUsuarioLogado();
    Api.get(`/Tarefas/${user.pkIdUser}/buscar-por-usuario`).then((response) => {
      Object.keys(response.data).forEach((key) => {
        if (response.data[key].concluido === false) {
          todo[key] = response.data[key];
        }
      });
      console.log(todo)
      setTodos(todo)
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