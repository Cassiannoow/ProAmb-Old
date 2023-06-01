/*
using Microsoft.AspNetCore.Mvc;
using proamb_API.Data;
using proamb_API.Models;

namespace proamb_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AmigosController : ControllerBase
    {
        private ProambContext _context;
        public AmigosController(ProambContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Amigos>> GetAll()
        {
            return _context.Amigos.ToList();
        }

        [HttpGet("{idUsuario}/{idAmigo}")]
        public async Task<ActionResult<Amigos>> GetAmigo(int idUsuario, int idAmigo)
        {
            var amigo = await _context.Amigos.FindAsync(idUsuario, idAmigo);

            return amigo;
        }

        [HttpPost]
        public async Task<ActionResult> post(Amigos model)
        {
            try {
                _context.Amigos.Add(model);
                if( await _context.SaveChangesAsync() == 1)
                {
                    return Created($"/api/posts/{model.IdUsuario}/{model.IdAmigo}", model);
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
            return BadRequest();
        }

        /*[HttpPut("{idUsuario}/{idAmigo}")]
        public async Task<ActionResult> put(int idUsuario, int idAmigo, Amigos amigoAlt)
        {
            try {
                var result = await _context.Comentarios.FindAsync(idComentario);
                if(idComentario != result.Id)
                {
                    return BadRequest();
                }

                result.Conteudo = comentarioAlt.Conteudo;
                await _context.SaveChangesAsync();
                return Created($"/api/usuario/{comentarioAlt.Id}", comentarioAlt);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpDelete("{idComentario}")]
        public async Task<ActionResult> delete(int idComentario)
        {
            try {
                var comentario = await _context.Comentarios.FindAsync(idComentario);
                if(comentario == null)
                {
                    return NotFound();
                }
                
                _context.Remove(comentario);
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
*/