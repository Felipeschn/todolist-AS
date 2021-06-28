using System;
using System.Collections.Generic;
using System.Text;

namespace TodoList.Domain.Queries
{
    public class TarefasQueryResult
    {
        public long PkCodTarefa { get; set; }
        public string NomeTarefa { get; set; }
        public DateTime DataTarefa { get; set; }
        public bool Concluido { get; set; }
        public long FkImportancia { get; set; }
        public long FkIdUser { get; set; }
    }
}
