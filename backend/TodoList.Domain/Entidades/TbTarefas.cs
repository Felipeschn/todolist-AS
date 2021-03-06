using System;
using System.Collections.Generic;
using System.Text;

namespace TodoList.Domain.Entidades
{
    public class TbTarefas
    {
        public long PkCodTarefa { get; private set; }
        public string NomeTarefa { get; private set; }
        public DateTime DataTarefa { get; private set; }
        public bool Concluido { get; private set; }
        public int Importancia { get; private set; }
        public long FkIdUser { get; private set; }

        public TbTarefas(long pkCodTarefa, string nomeTarefa, DateTime dataTarefa, bool concluido, int importancia, long fkIdUser)
        {
            PkCodTarefa = pkCodTarefa;
            NomeTarefa = nomeTarefa;
            DataTarefa = dataTarefa;
            Concluido = concluido;
            Importancia = importancia;
            FkIdUser = fkIdUser;
        }
    }
}
