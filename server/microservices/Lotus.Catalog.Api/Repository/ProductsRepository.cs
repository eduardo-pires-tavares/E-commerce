using System.Collections.Generic;
using System.Threading.Tasks;
using Lotus.Catalog.Api.Entities;
using Lotus.Catalog.Api.Interfaces.Generic;
using Lotus.Catalog.Api.Interfaces.Products;
using MongoDB.Driver;

namespace Lotus.Catalog.Api.Repository
{
    public class ProductsRepository : IProductsRepository
    {
        private readonly ICatalogContext _context;

        public ProductsRepository(ICatalogContext context)
        {
            _context = context;
        }

        public async Task AddAsync(Product entity)
        {
            await _context.Products.InsertOneAsync(entity);
        }
        public async Task DisableAsync(string id)
        {
            var product = await GetByIdAsync(id);
            product.IsValid = false;
            await UpdateAsync(id, product);
        }

        public async Task<IEnumerable<Product>> GetAllAsync()
        {
            return await _context.Products.Find(p => true).ToListAsync();
        }

        public async Task<Product> GetByIdAsync(string id)
        {
            FilterDefinition<Product> filter = Builders<Product>.Filter.Eq(p => p.Id, id);

            return await _context.Products.Find(filter).FirstAsync();
        }

        public async Task UpdateAsync(string id, Product entity)
        {
            await _context.Products.ReplaceOneAsync(filter: p => p.Id.Equals(id), replacement: entity, new ReplaceOptions() { IsUpsert = true });
        }


        public async Task<IEnumerable<Product>> GetProductsByCategory(string categorieName)
        {
            FilterDefinition<Product> filter = Builders<Product>.Filter.Eq(p => p.Category.ToLower(), categorieName.ToLower());

            return await _context.Products.Find(filter).ToListAsync();
        }

        public async Task<IEnumerable<Product>> GetProductsByName(string name)
        {
            FilterDefinition<Product> filter = Builders<Product>.Filter.Eq(p => p.Name.ToLower(), name.ToLower());

            return await _context.Products.Find(filter).ToListAsync();
        }

        public async Task DeleteProductsAsync()
        {
            await _context.Products.DeleteManyAsync(Builders<Product>.Filter.Empty);
        }
    }
}
