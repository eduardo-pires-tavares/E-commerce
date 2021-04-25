using System;

namespace Lotus.Catalog.Api.Entities
{
    public abstract class BaseEntity
    {
        public bool IsValid { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
    }
}
