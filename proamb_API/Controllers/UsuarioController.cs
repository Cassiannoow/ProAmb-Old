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

        [HttpGet]
        public ActionResult<List<Usuarios>> GetAll()
        {
            return _context.Usuarios.ToList();
        }
    }
}