import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import Api from '../api.js';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    const concluiTarefa = (todo) => {
        Api.post("/Tarefa", {
            id: todo.PkCodTarefa,
        }).then(() => {
            console.log("Alterado com Sucesso")
        });
    };

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.PkCodTarefa} onClick={() => completeTodo(todo.PkCodTarefa)}>
                {todo.nomeTarefa}
            </div>
            <div className='icons'>
                <RiCheckboxCircleFill
                    onClick={() => concluiTarefa(todo)}
                    className='concluido-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.PkCodTarefa, value: todo.nomeTarefa })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
};

export default Todo;