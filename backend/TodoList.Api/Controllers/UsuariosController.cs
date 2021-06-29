using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoList.Domain.Commands.Usuarios.Input;
using TodoList.Domain.Handler;
using TodoList.Domain.Interfaces.Repositorios;

namespace TodoList.Api.Controllers
{
    [EnableCors("AllowOrigin")]
    [ApiController]
    [Route("[controller]")]
    public class UsuariosController : ControllerBase
    {
        UsuariosHandler handler;
        protected readonly IUsuariosRepositorio repositorio;
        public UsuariosController(UsuariosHandler handler, IUsuariosRepositorio repositorio)
        {
            this.handler = handler;
            this.repositorio = repositorio;
        }

        [HttpGet]
        [Route("{email}/{senha}")]
        public async Task<IActionResult> ObterUsuarioPorEmailESenhaAsync(string email, string senha)
        {
            return Ok(await repositorio.ObterPorEmailESenhaAsync(email, senha));
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] AdicionarUsuariosCommand command)
        {
            var response = handler.Handler(command);
            return Ok(response);
        }
    }
}