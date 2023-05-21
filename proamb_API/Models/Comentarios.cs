namespace proamb_API.Models
{
    public class Comentarios
    {
        public int Id { get; set; }
        public string? Conteudo { get; set; }

        //foreign keys
        public int UsuariosId { get; set; }
        public int PostsId { get; set; }

        public Usuarios Usuario { get; set; }
        public Posts Post { get; set; }
    }
}