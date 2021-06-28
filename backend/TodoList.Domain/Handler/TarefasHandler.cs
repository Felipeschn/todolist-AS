using Flunt.Notifications;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TodoList.Domain.Commands.Tarefas.Input;
using TodoList.Domain.Commands.Tarefas.Output;
using TodoList.Domain.Entidades;
using TodoList.Domain.Interfaces.Commands;
using TodoList.Domain.Interfaces.Repositorios;

namespace TodoList.Domain.Handler
{
    public class TarefasHandler : Notifiable<Notification>, ICommandHandler<AdicionarTarefasCommand>,
                                    ICommandHandler<AtualizarTarefasCommand>
    {
        private readonly ITarefasRepositorio repositorio;

        public TarefasHandler(ITarefasRepositorio repositorio)
        {
            this.repositorio = repositorio;
        }
        public ICommandResult Handler(AdicionarTarefasCommand command)
        {
            try
            {
                if (!command.ValidarCommand())
                    return new AdicionarTarefaCommandResult(false, "Por favor corrija as inconsistêcias abaixo", command.Notifications);

                long id = 0;
                string nomeTarefa = command.NomeTarefa;
                DateTime DataTarefa = command.DataTarefa;
                bool concluido = command.Concluido;
                long fkImportancia = command.FkImportancia;
                long fkIdUser = command.FkIdUser;

                TbTarefas tarefa = new TbTarefas(0, nomeTarefa, DataTarefa, concluido, fkImportancia, fkIdUser);

                id = repositorio.Inserir(tarefa);

                var retorno = new AdicionarTarefaCommandResult(true, "Tarefa gravada com sucesso", new
                {
                    PkCodTarefa = id,
                    NomeTarefa = tarefa.NomeTarefa,
                    DataTarefa = tarefa.DataTarefa,
                    Concluido = tarefa.Concluido,
                    FkImportancia = tarefa.FkImportancia,
                    FkIdUser = tarefa.FkIdUser
                });

                return retorno;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ICommandResult Handler(AtualizarTarefasCommand command)
        {
            try
            {
                if (!command.ValidarCommand())
                    return new AtualizarTarefasCommandResult(false, "Por favor corrija as inconsistêcias abaixo", command.Notifications);

                if (!repositorio.CheckId(command.PkCodTarefa))
                {
                    AddNotification("Id", "Id inválido. Este id não está cadastrado.");
                    return new AtualizarTarefasCommandResult(false, "Por favor corrija as inconsistêcias abaixo", Notifications);
                }

                long pkCodTarefa = command.PkCodTarefa;
                string nomeTarefa = command.NomeTarefa;
                DateTime dataTarefa = command.DataTarefa;
                bool concluido = command.Concluido;
                long fkImportancia = command.FkImportancia;
                long fkIdUser = command.FkIdUser;

                TbTarefas tarefa = new TbTarefas(pkCodTarefa, nomeTarefa, dataTarefa, concluido, fkImportancia, fkIdUser);

                repositorio.Alterar(tarefa);

                var retorno = new AtualizarTarefasCommandResult(true, "Tarefa atualizada com sucesso", new
                {
                    Id = tarefa.PkCodTarefa,
                    Nome = tarefa.NomeTarefa,
                    Autor = tarefa.DataTarefa,
                    Edicao = tarefa.Concluido,
                    Isbn = tarefa.FkImportancia,
                    Imagem = tarefa.FkIdUser
                });

                return retorno;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ICommandResult Handler(ApagarTarefasCommand command)
        {
            if (!command.ValidarCommand())
                return new ApagarTarefasCommandResult(false, "Por favor corrija as inconsistêcias abaixo", command.Notifications);

            if (!repositorio.CheckId(command.PkCodTarefa))
            {
                AddNotification("Id", "Id inválido. Este id não está cadastrado.");
                return new ApagarTarefasCommandResult(false, "Por favor corrija as inconsistêcias abaixo", Notifications);
            }

            repositorio.Deletar(command.PkCodTarefa);

            var retorno = new ApagarTarefasCommandResult(true, "Tarefa apagada com sucesso", new
            {
                Id = command.PkCodTarefa
            });

            return retorno;
        }
    }
}