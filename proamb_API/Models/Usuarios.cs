namespace proamb_API.Models
{
    public class Usuarios
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? Email { get; set; }
        [Required(ErrorMessage = "O usuário deve conter uma senha")]
        public string? Senha { get; set; }
        [Required(ErrorMessage = "O usuário deve conter um username")]
        public string? Username { get; set; }
        public string? Foto { get; set; }
        public string? Biografia { get; set ; }
        public string? Cep { get; set; }
        public string? Role { get; set; }

        public ICollection<Posts> Posts { get; set; }
        public ICollection<Comentarios> Comentarios { get; set; }
    }
}