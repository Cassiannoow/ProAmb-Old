namespace proamb_API.Models
{
    public class Comentarios
    {
        public int Id { get; set; }
        public string? Conteudo { get; set; }

        //foreign keys
        public int IdUsuario { get; set; }
        public int IdPost { get; set; }

        /*public Usuarios Usuario { get; set; }
        public Posts Post { get; set; }*/
    }
}