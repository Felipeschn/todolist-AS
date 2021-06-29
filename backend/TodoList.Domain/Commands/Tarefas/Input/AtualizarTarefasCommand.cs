using Flunt.Notifications;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;
using TodoList.Domain.Interfaces.Commands;

namespace TodoList.Domain.Commands.Tarefas.Input
{
    public class AtualizarTarefasCommand : Notifiable<Notification>, ICommandPadrao
    {
            [JsonIgnore]
            public long PkCodTarefa { get; set; }
            public string NomeTarefa { get; set; }
            public DateTime DataTarefa { get; set; }
            public bool Concluido { get; set; }
            public int Importancia { get; set; }
            public long FkIdUser { get; set; }

    public bool ValidarCommand()
    {
        try
        {
            if (PkCodTarefa <= 0)
                AddNotification("PkCodTarefa", "PkCodTarefa é um campo obrigatório");

            if (string.IsNullOrEmpty(NomeTarefa))
                AddNotification("NomeTarefa", "NomeTarefa é um campo obrigatório");
            else if (NomeTarefa.Length > 150)
                AddNotification("NomeTarefa", "NomeTarefa maior do que o esperado");

            //if (string.IsNullOrEmpty(Autor))
            //    AddNotification("Autor", "Autor é um campo obrigatório");
            //else if (Autor.Length > 50)
            //    AddNotification("Autor", "Autor maior do que o esperado");

            //if (Edicao <= 0)
            //    AddNotification("Edicao", "Edicao é um campo obrigatório");

            //if (string.IsNullOrEmpty(Isbn))
            //    AddNotification("Isbn", "Isbn é um campo obrigatório");
            //else if (Isbn.Length > 50)
            //    AddNotification("Isbn", "Isbn maior do que o esperado");

            //if (string.IsNullOrEmpty(Imagem))
            //    AddNotification("Imagem", "Imagem é um campo obrigatório");

            return IsValid;
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }
}
}