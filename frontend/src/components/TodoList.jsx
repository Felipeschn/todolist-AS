import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


import { Tabs, Tab } from 'react-bootstrap';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <Tabs animation={true} id="controlled-tab" style={{ marginBottom: 10 }}>
        <Tab eventKey="tarefas" title="Tarefas" className="Tab">
          <h1>Qual sua tarefa para hoje?</h1>
          <TodoForm onSubmit={addTodo} />
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </Tab>
        <Tab eventKey="historico" title="Historico">
        </Tab>
      </Tabs>

    </>
  );
}

export default TodoList;