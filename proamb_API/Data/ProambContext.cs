using Microsoft.EntityFrameworkCore;
using proamb_API.Models;
using System.Diagnostics.CodeAnalysis;

namespace proamb_API.Data
{
    public class ProambContext: DbContext
    {
        protected readonly IConfiguration Configuration;
        public ProambContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(Configuration.GetConnectionString("StringConexaoSQLServer"));
        }

        public DbSet<Usuarios> Usuarios {get; set;}
        public DbSet<Posts> Posts { get; set; }
        public DbSet<Comentarios> Comentarios { get; set; }
    }
}