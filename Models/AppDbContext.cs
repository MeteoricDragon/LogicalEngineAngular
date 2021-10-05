﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LogicalEngineAngular.Models
{
    public class AppDBContext : DbContext
    {
        private readonly DbContextOptions _options;
        public AppDBContext(DbContextOptions options) : base(options)
        {
            _options = options;
        }

        public DbSet<CarPartUnitContainerMember> members { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
