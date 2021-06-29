using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoList.Domain.Commands.Tarefas.Input;
using TodoList.Domain.Handler;
using TodoList.Domain.Interfaces.Commands;
using TodoList.Domain.Interfaces.Repositorios;

namespace TodoList.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TarefasController : ControllerBase
    {
        TarefasHandler handler;
        protected readonly ITarefasRepositorio repositorio;
        public TarefasController(TarefasHandler handler, ITarefasRepositorio repositorio)
        {
            this.handler = handler;
            this.repositorio = repositorio;
        }

        [HttpGet]
        public async Task<IActionResult> ObterTarefasAsync()
        {
            return Ok(await repositorio.ListarAsync());
        }

        [HttpGet]
        [Route("{data}")]
        public async Task<IActionResult> ObterTarefaPorDataAsync(DateTime data)
        {
            return Ok(await repositorio.ObterPorDataAsync(data));
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] AdicionarTarefasCommand command)
        {
            var response = handler.Handler(command);
            return Ok(response);
        }

        [HttpPut]
        [Route("v1/tarefa/{id}")]
        public ICommandResult PutAsync(long id, [FromBody] AtualizarTarefasCommand command)
        {
            command.PkCodTarefa = id;
            return handler.Handler(command);
        }

        [HttpDelete]
        [Route("v1/tarefa/{id}")]
        public ICommandResult LivroApagar(long id)
        {
            ApagarTarefasCommand command = new ApagarTarefasCommand() { PkCodTarefa = id };
            return handler.Handler(command);
        }
    }
}
