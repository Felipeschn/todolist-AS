import React, { useState } from 'react';
import Axios from 'axios';

function TodoForm(props) {
    const [input, setInput] = useState("");
    const user = '1'

    const addTarefa = () => {
        Axios.post("https://localhost:5001/Tarefas", {
            nomeTarefa: input,
            fkIdUser: user
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    const alteraTarefa = () => {
        Axios.post("http://localhost:3001/alteraTarefa", {
            id: props.edit.id,
            nomeTarefa: input
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
                        onChange={(event) => setInput(event.target.value)}
                        name='nomeTarefa'
                        className='todo-input edit'
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
                        onChange={(event) => setInput(event.target.value)}
                        name='nomeTarefa'
                        className='todo-input'
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