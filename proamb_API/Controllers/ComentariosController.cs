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

        [HttpGet("{idComentario}")]
        public async Task<ActionResult<Comentarios>> GetComentario(int idComentario)
        {
            var comentario = await _context.Comentarios.FindAsync(idComentario);

            return comentario;
        }

        [HttpPost]
        public async Task<ActionResult> post(Comentarios model)
        {
            try {
                _context.Comentarios.Add(model);
                if( await _context.SaveChangesAsync() == 1)
                {
                    return Created($"/api/posts/{model.Id}", model);
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
            return BadRequest();
        }

        [HttpPut("{idComentario}")]
        public async Task<ActionResult> put(int idComentario, Comentarios comentarioAlt)
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