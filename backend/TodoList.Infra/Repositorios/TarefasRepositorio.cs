using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;
using TodoList.Domain.Entidades;
using TodoList.Domain.Interfaces.Repositorios;
using TodoList.Domain.Queries;
using TodoList.Infra.DataContexts;
using TodoList.Infra.Queries;

namespace TodoList.Infra.Repositorios
{
    public class TarefasRepositorio : ITarefasRepositorio
    {
        protected readonly DataContext context;

        private readonly DynamicParameters param;

        public TarefasRepositorio(DataContext context)
        {
            this.param = new DynamicParameters();
            this.context = context;
        }
        public async Task<IEnumerable<TarefasQueryResult>> ListarAsync() => 
            await context.Connection.QueryAsync<TarefasQueryResult>(TarefasQueries.LISTAR);

        public async Task<TarefasQueryResult> ObterPorDataAsync(DateTime data) =>
            await context.Connection.QueryFirstOrDefaultAsync<TarefasQueryResult>(TarefasQueries.LISTARPORDATA, new { data });

        public long Inserir(TbTarefas tarefa)
        {
            try
            {
                param.Add("@NomeTarefa", tarefa.NomeTarefa);
                param.Add("@DataTarefa", tarefa.DataTarefa);
                param.Add("@Concluido", tarefa.Concluido);
                param.Add("@FkIdUser", tarefa.FkIdUser);

                return context.Connection.ExecuteScalar<long>(TarefasQueries.SALVAR, param);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool CheckId(long id)
        {
            try
            {
                param.Add("Id", id, DbType.Int64);

                return context.Connection.QueryFirstOrDefault<bool>(TarefasQueries.LISTARPORID, new { id });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Alterar(TbTarefas tarefa)
        {
            try
            {
                param.Add("@PkCodTarefa", tarefa.PkCodTarefa, DbType.Int64);
                param.Add("@NomeTarefa", tarefa.NomeTarefa);
                param.Add("@DataTarefa", tarefa.DataTarefa);
                param.Add("@Concluido", tarefa.Concluido);
                param.Add("@FkIdUser", tarefa.FkIdUser);

                context.Connection.Execute(TarefasQueries.ATUALIZAR, param);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Deletar(long id)
        {
            param.Add("@PkCodTarefa", id, DbType.Int64);
            context.Connection.Execute(TarefasQueries.DELETAR, param);
        }
    }
}
