using System;
using MongoDB.Driver;
using Lotus.Catalog.Api.Entities;

namespace Lotus.Catalog.Api.Interfaces
{
    public interface ICatalogContext {

        public IMongoCollection<Product> Products {get;}

    }
}
