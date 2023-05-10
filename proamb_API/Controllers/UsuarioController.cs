using Microsoft.AspNetCore.Mvc;
using proamb_API.Data;
using proamb_API.Models;

namespace proamb_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController: ControllerBase
    {
        private ProambContext _context;
        public UsuariosController(ProambContext context)
        {
            _context = context;
        }

        //GET: api/usuarios
        [HttpGet]
        public ActionResult<List<Usuarios>> GetAll()
        {
            return _context.Usuarios.ToList();
        }

        //GET: api/usuarios/{username}
        //Precisa alterar o db, pra colocar como primary key o username, ou como unique
        //Método correto
        [HttpGet("{username}")]
        public async Task<ActionResult<Usuarios>> GetUsuario(string username)
        {
            var usuario = _context.Usuarios.Where(u => u.Username == username).FirstOrDefault();

            return usuario;
        }

        //metodo provisorio
        /*[HttpGet("{id}")]
        public async Task<ActionResult<Usuarios>> GetUsuarioById(int id)
        {
            var usuario = await _context.Usuarios.FindAsync(id);
            
            return usuario;
        }*/
    }
}