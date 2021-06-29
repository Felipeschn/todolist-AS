import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

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

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.nomeTarefa}
            </div>
            <div className='icons'>
                <RiCheckboxCircleFill
                    onClick={() => removeTodo(todo.id)}
                    className='concluido-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.nomeTarefa })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
};

export default Todo;