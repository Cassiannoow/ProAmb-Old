using Microsoft.AspNetCore.Mvc;
using proamb_API.Data;
using proamb_API.Models;

namespace proamb_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComentariosController: ControllerBase
    {
        private ProambContext _context;
        public ComentariosController(ProambContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Comentarios>> GetAll()
        {
            return _context.Comentarios.ToList();
        }
    }
}