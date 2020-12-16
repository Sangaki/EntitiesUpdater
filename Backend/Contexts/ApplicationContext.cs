using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Contexts
{
    public class ApplicationContext : DbContext
    {
        public DbSet<ent> Ents { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=db;Port=5432;Database=postgres;Username=postgres;Password=qwerty@1");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //TODO
            ent ent1 = new ent { name = "Entity01" };
            ent ent2 = new ent { name = "Entity02" };
            ent ent3 = new ent { name = "Entity03" };
            ent ent4 = new ent { name = "Entity04" };
            ent ent5 = new ent { name = "Entity05" };
            ent ent6 = new ent { name = "Entity06" };
            ent ent7 = new ent { name = "Entity07" };
            ent ent8 = new ent { name = "Entity08" };
            ent ent9 = new ent { name = "Entity09" };
            ent ent10 = new ent { name = "Entity10" };
            ent ent11 = new ent { name = "Entity11" };
            ent ent12 = new ent { name = "Entity12" };
            ent ent13 = new ent { name = "Entity13" };
            ent ent14 = new ent { name = "Entity14" };
            ent ent15 = new ent { name = "Entity15" };
            ent ent16 = new ent { name = "Entity16" };
            ent ent17 = new ent { name = "Entity17" };
            ent ent18 = new ent { name = "Entity18" };
            ent ent19 = new ent { name = "Entity19" };
            ent ent20 = new ent { name = "Entity20" };
            var ids = new ent[] {ent1, ent2, ent3, ent4, ent5, ent6, ent7, ent8, ent9, ent10, ent11, ent12, ent13, ent14, ent15, ent16, ent17, ent18, ent19, ent20};
            modelBuilder.Entity<ent>().HasData(ids);
            base.OnModelCreating(modelBuilder);
        }

        public ApplicationContext()
        {
            Database.EnsureCreated();
        }
    }
}
