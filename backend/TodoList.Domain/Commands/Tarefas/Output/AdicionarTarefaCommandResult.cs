using TodoList.Domain.Interfaces.Commands;

namespace TodoList.Domain.Commands.Tarefas.Output
{
    public class AdicionarTarefaCommandResult : ICommandResult
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }

        public AdicionarTarefaCommandResult(bool success, string message, object data)
        {
            Success = success;
            Message = message;
            Data = data;
        }
    }
}