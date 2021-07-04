import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import Api from '../api.js';

import {
    pegaUsuarioLogado
} from "../services/usuarioLogado.js";

var user = pegaUsuarioLogado();


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    if (edit.id) {
        return <TodoForm edit={edit} />;
    }

    const concluiTarefa = (todo) => {
        Api.put(`/Tarefas/${todo.pkCodTarefa}/editar-tarefa`, {
            nomeTarefa: todo.nomeTarefa,
            dataTarefa: new Date(),
            concluido: true,
            importancia: 0,
            fkIdUser: user.pkIdUser
        }).then((re) => {
            console.log(re);
        });
    };

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id}>
                {todo.nomeTarefa}
            </div>
            <div className='icons'>
                <RiCheckboxCircleFill
                    onClick={() => concluiTarefa(todo)}
                    className='concluido-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.pkCodTarefa, value: todo.nomeTarefa })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
};

export default Todo;