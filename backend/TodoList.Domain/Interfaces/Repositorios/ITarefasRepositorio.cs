using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TodoList.Domain.Entidades;
using TodoList.Domain.Queries;

namespace TodoList.Domain.Interfaces.Repositorios
{
    public interface ITarefasRepositorio
    {
        void Deletar(long id);
        Task<IEnumerable<TarefasQueryResult>> ListarAsync();
        long Inserir(TbTarefas tarefa);
        Task<IEnumerable<TarefasQueryResult>> ObterPorDataAsync(DateTime data);
        Task<IEnumerable<TarefasQueryResult>> ObterPorUsuarioAsync(long id);
        bool CheckId(long id);
        void Alterar(TbTarefas tarefa);
    }
}
