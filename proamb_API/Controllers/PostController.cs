using Microsoft.AspNetCore.Mvc;
using proamb_API.Data;
using proamb_API.Models;

namespace proamb_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController: ControllerBase
    {
        private ProambContext _context;
        public PostsController(ProambContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Posts>> GetAll()
        {
            return _context.Posts.ToList();
        }

        [HttpGet("{idPost}")]
        public async Task<ActionResult<Posts>> GetPost(int idPost)
        {
            var post = await _context.Posts.FindAsync(idPost);

            return post;
        }


        [HttpPost]
        public async Task<ActionResult> post(Posts model)
        {
            try {
                _context.Posts.Add(model);
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

        [HttpPut("{idPost}")]
        public async Task<ActionResult> put(int idPost, Posts postAlt)
        {
            try {
                var result = await _context.Posts.FindAsync(idPost);
                if(idPost != result.Id)
                {
                    return BadRequest();
                }

                result.Imagem = postAlt.Imagem;
                result.Conteudo = postAlt.Conteudo;
                await _context.SaveChangesAsync();
                return Created($"/api/usuario/{postAlt.Id}", postAlt);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpDelete("{idPost}")]
        public async Task<ActionResult> delete(int idPost)
        {
            try {
                var post = await _context.Posts.FindAsync(idPost);

                if(post == null)
                {
                    return NotFound();
                }
                
                _context.Remove(post);
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