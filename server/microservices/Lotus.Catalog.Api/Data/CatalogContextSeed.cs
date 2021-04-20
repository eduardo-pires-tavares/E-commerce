
using System.Collections.Generic;
using System.Threading.Tasks;
using Lotus.Catalog.Api.Entities;
using MongoDB.Driver;

namespace Lotus.Catalog.Api.Data
{
    public class CatalogContextSeed
    {

        public static async Task SeedData(IMongoCollection<Product> productCollection){

            bool existProducts = productCollection.Find(x=>true).Any();

            if(existProducts){
                await productCollection.InsertManyAsync(GetMockProducts());
            }

        }

        private static IEnumerable<Product> GetMockProducts(){
            return new List<Product>(){


            };
        }

    }
}
