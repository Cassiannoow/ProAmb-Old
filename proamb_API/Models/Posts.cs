namespace proamb_API.Models
{
    public class Posts
    {
        public int Id { get; set; }
        public string? Imagem { get; set; }
        [Required(ErrorMessage = "O post deve conter alguma informação")]
        public string? Conteudo { get; set; }

        //foreign key para usuario
        [Required(ErrorMessage = "O post deve conter algum remetente")]
        public int UsuariosId { get; set; }
        public Usuarios Usuario { get; set; }

        //foreign key para comentarios
        public ICollection<Comentarios> Comentarios { get; set; }
    }
}