namespace proamb_API.Models
{
    public class Posts
    {
        public int Id { get; set; }
        public string? Imagem { get; set; }
        public string? Conteudo { get; set; }

        //foreign key para usuario
        public int UsuariosId { get; set; }
        public Usuarios Usuario { get; set; }

        //foreign key para comentarios
        public ICollection<Comentarios> Comentarios { get; set; }
    }
}