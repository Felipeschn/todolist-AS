using System;
using System.Collections.Generic;
using System.Text;
using TodoList.Domain.Interfaces.Commands;

namespace TodoList.Domain.Commands.Tarefas.Output
{
    public class ApagarTarefasCommandResult : ICommandResult
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }

        public ApagarTarefasCommandResult(bool success, string message, object data)
        {
            Success = success;
            Message = message;
            Data = data;
        }
    }
}
