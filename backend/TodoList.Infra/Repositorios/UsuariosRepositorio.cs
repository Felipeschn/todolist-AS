using Dapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TodoList.Domain.Entidades;
using TodoList.Domain.Interfaces.Repositorios;
using TodoList.Domain.Queries;
using TodoList.Infra.DataContexts;
using TodoList.Infra.Queries;

namespace TodoList.Infra.Repositorios
{
    public class UsuariosRepositorio : IUsuariosRepositorio
    {
        protected readonly DataContext context;

        private readonly DynamicParameters param;

        public UsuariosRepositorio(DataContext context)
        {
            this.param = new DynamicParameters();
            this.context = context;
        }

        public async Task<UsuariosQueryResult> ObterPorEmailESenhaAsync(string email, string senha) =>
            await context.Connection
            .QueryFirstOrDefaultAsync<UsuariosQueryResult>(UsuariosQueries.BUSCARPOREMAILESENHA, new { email, senha });

        public long Inserir(TbUsuarios usuario)
        {
            try
            {
                param.Add("@Nome", usuario.Nome);
                param.Add("@Datanasc", usuario.DataNasc);
                param.Add("@Email", usuario.Email);
                param.Add("@Senha", usuario.Senha);

                return context.Connection.ExecuteScalar<long>(UsuariosQueries.SALVAR, param);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
