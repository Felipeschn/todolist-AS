using System;
using System.Collections.Generic;
using System.Text;

namespace TodoList.Domain.Interfaces.Commands
{
    public interface ICommandPadrao
    {
        bool ValidarCommand();
    }
}
