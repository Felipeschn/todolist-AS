using Flunt.Notifications;
using System;
using System.Collections.Generic;
using System.Text;
using TodoList.Domain.Interfaces.Commands;

namespace TodoList.Domain.Commands.Tarefas.Input
{
    public class ApagarTarefasCommand : Notifiable<Notification>, ICommandPadrao
    {
        public long PkCodTarefa { get; set; }

        public bool ValidarCommand()
        {
            try
            {
                if (PkCodTarefa <= 0)
                    AddNotification("PkCodTarefa", "PkCodTarefa é um campo obrigatório");

                return IsValid;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
