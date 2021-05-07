using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;

namespace Lotus.Catalog.Api.Entities
{
    public class Product : BaseEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("Name")]
        public string Name { get; set; }
        [BsonElement("Category")]
        public string Category { get; set; }
        [BsonElement("Description")]
        public string Description { get; set; }
        [BsonElement("ImageFile")]
        public string ImageFile { get; set; }
        [BsonElement("Price")]
        public decimal Price { get; set; }

    }

}

