namespace proamb_API.Models
{
    public class Comentarios
    {
        public int Id { get; set; }
        public int IdUsuario { get; set; }
        public int IdPost { get; set; }
        public string? Conteudo { get; set; }
    }
}