using Flunt.Notifications;
using System;
using System.Collections.Generic;
using System.Text;
using TodoList.Domain.Commands.Usuarios.Input;
using TodoList.Domain.Commands.Usuarios.Output;
using TodoList.Domain.Entidades;
using TodoList.Domain.Interfaces.Commands;
using TodoList.Domain.Interfaces.Repositorios;

namespace TodoList.Domain.Handler
{
    public class UsuariosHandler : Notifiable<Notification>, ICommandHandler<AdicionarUsuariosCommand>
    {
        private readonly IUsuariosRepositorio repositorio;

        public UsuariosHandler(IUsuariosRepositorio repositorio)
        {
            this.repositorio = repositorio;
        }
        public ICommandResult Handler(AdicionarUsuariosCommand command)
        {
            try
            {
                if (!command.ValidarCommand())
                    return new AdicionarUsuarioCommandResult(false, "Por favor corrija as inconsistêcias abaixo", command.Notifications);

                long id = 0;
                string nome = command.Nome;
                DateTime dataNasc = command.Datanasc;
                string email = command.Email;
                string senha = command.Senha;

                TbUsuarios usuario = new TbUsuarios(0, nome, dataNasc, email, senha);

                id = repositorio.Inserir(usuario);

                var retorno = new AdicionarUsuarioCommandResult(true, "Tarefa gravada com sucesso", new
                {
                    PkIdUser = id,
                    Nome = usuario.Nome,
                    DataNasc = usuario.DataNasc,
                    Email = usuario.Email,
                    Senha = usuario.Senha
                });

                return retorno;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
