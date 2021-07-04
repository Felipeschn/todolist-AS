using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TodoList.Domain.Entidades;
using TodoList.Domain.Queries;

namespace TodoList.Domain.Interfaces.Repositorios
{
    public interface IUsuariosRepositorio
    {
        long Inserir(TbUsuarios usuario);
        Task<IEnumerable<UsuariosQueryResult>> ObterPorEmailESenhaAsync(string email, string senha);
    }
}
