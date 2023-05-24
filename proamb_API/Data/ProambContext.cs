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

        /*protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Usuarios>()
                .HasMany(x => x.Posts)
                .WithOne(x => x.Usuario)
                .HasForeignKey(x => x.IdUsuario)
                .HasPrincipalKey(x => x.Id);

            modelBuilder.Entity<Posts>()
                .HasMany(x => x.Comentarios)
                .WithOne(x => x.Post)
                .HasForeignKey(x => x.IdPost)
                .HasPrincipalKey(x => x.Id);

            modelBuilder.Entity<Comentarios>()
                .HasOne(x => x.Usuario)
                .WithMany(x => x.Comentarios)
                .HasForeignKey(x => x.IdUsuario)
                .HasPrincipalKey(x => x.Id);
        }*/

        public DbSet<Usuarios> Usuarios {get; set;}
        public DbSet<Posts> Posts { get; set; }
        public DbSet<Comentarios> Comentarios { get; set; }
    }
}