using System;
using System.Collections.Generic;
using System.Text;

namespace TodoList.Domain.Entidades
{
    public class TbUsuarios
    {
        public long PkIdUser { get; private set; }
        public string Nome { get; private set; }
        public DateTime DataNasc { get; private set; }
        public string Email { get; private set; }
        public string Senha { get; private set; }

        public TbUsuarios(long pkIdUser, string nome, DateTime dataNasc, string email, string senha)
        {
            PkIdUser = pkIdUser;
            Nome = nome;
            DataNasc = dataNasc;
            Email = email;
            Senha = senha;
        }
    }
}
