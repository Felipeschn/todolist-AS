import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Api from '../api.js';


import { Tabs, Tab } from 'react-bootstrap';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    Api.get("/Tarefas").then((response) => {
      setTodos(response.data)
    });
  }, [])

  return (
    <>
      <Tabs animation={true} id="controlled-tab" style={{ marginBottom: 10 }}>
        <Tab eventKey="tarefas" title="Tarefas" className="Tab">
          <h1>Qual sua tarefa para hoje?</h1>
          <TodoForm />
          <Todo
            todos={todos}
          />
        </Tab>
        <Tab eventKey="historico" title="Historico">
          <Todo
            todos={todos}
          />
        </Tab>
      </Tabs>

    </>
  );
}

export default TodoList;