import React, { useState } from 'react';
import Api from '../api.js';
import {
    pegaUsuarioLogado
} from "../services/usuarioLogado.js";

const user = pegaUsuarioLogado();

function TodoForm(props) {
    const [input, setInput] = useState("");

    const addTarefa = async () => {
        await Api.post(`/Tarefas`, {
            nomeTarefa: input,
            dataTarefa: new Date().toLocaleDateString(),
            concluido: false,
            importancia: 0,
            fkIdUser: user.pkIdUser
        });
    };

    const alteraTarefa = async (id) => {
        await Api.put(`/Tarefas/${id}/editar-tarefa`, {
            nomeTarefa: input,
            dataTarefa: new Date().toLocaleDateString(),
            concluido: false,
            importancia: 0,
            fkIdUser: user.pkIdUser
        }).then((re) => {
            console.log(re);
        });
    };

    /*const deletaTarefa = async (id) => {
        await Api.delete(`/Tarefas/v1/tarefa/${id}`)
    }*/

    return (
        <form className='todo-form'>
            {props.edit ? (
                <>
                    <input
                        placeholder='Atualizar Tarefa'
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={event => { setInput(event.target.value) }}
                    />
                    <button onClick={() => alteraTarefa(props.edit.id)} className='todo-button edit'>
                        Atualizar
                    </button>
                </>
            ) : (
                <>
                    <input
                        placeholder='Adicionar Tarefa'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={event => { setInput(event.target.value) }}
                    />

                    <button onClick={addTarefa} className='todo-button'>
                        <i className="fa fa-plus-circle" style={{ fontSize: '20px' }} />
                    </button>
                </>
            )
            }
        </form >
    );
}

export default TodoForm;