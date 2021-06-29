using TodoList.Domain.Interfaces.Commands;

namespace TodoList.Domain.Commands.Usuarios.Output
{
    public class AdicionarUsuarioCommandResult : ICommandResult
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }

        public AdicionarUsuarioCommandResult(bool success, string message, object data)
        {
            Success = success;
            Message = message;
            Data = data;
        }
    }
}