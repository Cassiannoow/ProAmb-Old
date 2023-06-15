using Microsoft.AspNetCore.Mvc;
using proamb_API.Data;
using proamb_API.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace proamb_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController: ControllerBase
    {
        private readonly IConfiguration _configuration;
        private ProambContext _context;
        public UsuariosController(IConfiguration configuration, ProambContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        //GET: api/usuarios
        [HttpGet]
        public ActionResult<List<Usuarios>> GetAll()
        {
            return _context.Usuarios.ToList();
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<Usuarios>> GetUsuario(string username)
        {
            var usuario = _context.Usuarios.Where(u =>  u.Username == username).FirstOrDefault();

            return usuario;
        }

        [HttpPost]
        public async Task<ActionResult> post(Usuarios model)
        {
            try {
                _context.Usuarios.Add(model);
                if( await _context.SaveChangesAsync() == 1)
                {
                    return Created($"/api/usuario/{model.Username}", model);
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }

            return BadRequest();
        }

        [HttpPut("{idUsuario}")]
        public async Task<ActionResult> put(int idUsuario, Usuarios usuarioAlt)
        {
            try {
                var result = await _context.Usuarios.FindAsync(idUsuario);
                if(idUsuario != result.Id)
                {
                    return BadRequest();
                }

                result.Nome = usuarioAlt.Nome;
                result.Email = usuarioAlt.Email;
                result.Username = usuarioAlt.Username;
                result.Foto = usuarioAlt.Foto;
                result.Biografia = usuarioAlt.Biografia;
                result.Cep = usuarioAlt.Cep;
                await _context.SaveChangesAsync();
                return Created($"/api/usuario/{usuarioAlt.Id}", usuarioAlt);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpDelete("{idUsuario}")]
        public async Task<ActionResult> delete(int idUsuario)
        {
            try {
                var usuario = await _context.Usuarios.FindAsync(idUsuario);
                if(usuario == null)
                {
                    return NotFound();
                }
                
                _context.Remove(usuario);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }
    }
}