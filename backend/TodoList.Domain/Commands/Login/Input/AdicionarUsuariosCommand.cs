using Flunt.Notifications;
using System;
using System.Collections.Generic;
using System.Text;
using TodoList.Domain.Interfaces.Commands;

namespace TodoList.Domain.Commands.Usuarios.Input
{
    public class AdicionarUsuariosCommand : Notifiable<Notification>, ICommandPadrao
    {
        public string Nome { get; set; }
        public DateTime Datanasc { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public bool ValidarCommand()
        {
            try
            {
                if (string.IsNullOrEmpty(Senha))
                    AddNotification("Senha", "Senha é um campo obrigatório");

                return IsValid;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
