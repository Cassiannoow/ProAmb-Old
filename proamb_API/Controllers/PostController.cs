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
    }
}