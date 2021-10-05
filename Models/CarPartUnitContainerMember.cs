using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LogicalEngineAngular.Models
{
    public class CarPartUnitContainerMember
    {
        [Key]
        public long Id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string PartCode { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string UnitsOwned { get; set; }
    }
}
