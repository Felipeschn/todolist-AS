import React, { useState } from 'react';
import Api from '../api.js';

function TodoForm(props) {
    const [input, setInput] = useState("");

    const addTarefa = () => {
        Api.post("/Tarefas", {
            nomeTarefa: input,
            dataTarefa: new Date(),
            concluido: false,
            importancia: 0,
            fkIdUser: 1
        }).then(() => {
            console.log("sucesso");
        });
    };

    const alteraTarefa = () => {
        Api.put("/Tarefas", {
            id: props.edit.id,
            NomeTarefa: input,
        }).then(() => {
            console.log("Alterado com Sucesso")
        });
    };

    return (
        <form className='todo-form'>
            {props.edit ? (
                <>
                    <input
                        placeholder='Atualizar Tarefa'
                        value={input}
                        name='NomeTarefa'
                        className='todo-input edit'
                        onChange={(event) => { setInput(event.target.value) }}
                    />
                    <button onClick={alteraTarefa} className='todo-button edit'>
                        Atualizar
                    </button>
                </>
            ) : (
                <>
                    <input
                        placeholder='Adicionar Tarefa'
                        value={input}
                        name='NomeTarefa'
                        className='todo-input'
                        onChange={(event) => { setInput(event.target.value) }}
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