using System;
using System.Collections.Generic;
using System.Text;

namespace TodoList.Domain.Queries
{
    public class UsuariosQueryResult
    {
        public long PkIdUser { get; set; }
        public string Nome { get; set; }
        public DateTime DataNasc { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}
