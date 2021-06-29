import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Axios from 'axios';


import { Tabs, Tab } from 'react-bootstrap';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5001/Tarefas").then((response) => {
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