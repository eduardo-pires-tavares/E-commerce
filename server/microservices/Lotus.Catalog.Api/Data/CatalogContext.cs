using Lotus.Catalog.Api.Data;
using Lotus.Catalog.Api.Entities;
using Lotus.Catalog.Api.Interfaces.Generic;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;

namespace Lotus.Catalog.Api.Data
{

}
public class CatalogContext : ICatalogContext
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;
    private readonly string _databaseName;
    private readonly string _collectionName;
    public CatalogContext(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetSection("DatabaseSettings").GetValue<string>("ConnectionString");
        _databaseName = _configuration.GetSection("DatabaseSettings").GetValue<string>("DatabaseName");
        _collectionName = _configuration.GetSection("DatabaseSettings").GetValue<string>("CollectionName");

        var client = new MongoClient(_connectionString);
        var database = client.GetDatabase(_databaseName);

        Products = database.GetCollection<Product>(_collectionName);
        CatalogContextSeed.SeedData(Products).GetAwaiter().GetResult();

    }
    public IMongoCollection<Product> Products { get; private set; }
}
