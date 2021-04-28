
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Lotus.Catalog.Api.Entities;

namespace Lotus.Catalog.Api.Interfaces.Products
{
    public interface IProductsRepository
    {
        public Task<IEnumerable<Product>> GetProductsByCategory(string categorieName);
        public Task<IEnumerable<Product>> GetProductsByName(string name);
        public Task<IEnumerable<Product>> GetAllAsync();
        public Task<Product> GetByIdAsync(string id);
        public Task AddAsync(Product entity);
        public Task UpdateAsync(string id, Product entity);
        public Task DisableAsync(string id);
        public Task DeleteProductsAsync();
    }
}
