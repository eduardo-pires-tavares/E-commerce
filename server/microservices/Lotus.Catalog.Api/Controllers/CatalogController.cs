
using Lotus.Catalog.Api.Entities;
using Lotus.Catalog.Api.Interfaces.Products;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace Lotus.Api.Catalog.Controller
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class CatalogController : ControllerBase
    {

        private readonly IProductsRepository _productsRepository;
        private readonly ILogger<CatalogController> _logger;
        public CatalogController(IProductsRepository productsRepository, ILogger<CatalogController> logger)
        {
            _productsRepository = productsRepository;
            _logger = logger;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Product>), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            var products = await _productsRepository.GetAllAsync();

            return Ok(products);
        }

        [HttpGet("{id:Length(24)}", Name = "GetProduct")]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType(typeof(Product), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<Product>> GetProductById(string id)
        {
            try
            {
                var product = await _productsRepository.GetByIdAsync(id);
                return Ok(product);
            }
            catch (System.Exception)
            {
                _logger.LogError($"Product with id: {id}, not found.");
                return NotFound();
            }
        }

        [Route("[action]/{category}", Name = "GetProductByCategory")]
        [HttpGet]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType(typeof(Product), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductByCategory(string category)
        {
            try
            {
                var products = await _productsRepository.GetProductsByCategory(category);
                return Ok(products);

            }
            catch (Exception)
            {
                _logger.LogError($"Products with category: {category}, not found.");
                return NotFound();
            }
        }


        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> CreateProduct([FromBody] Product product)
        {
            try
            {
                await _productsRepository.AddAsync(product);

                return CreatedAtAction(nameof(GetProductById), new { id = product.Id }, product);
            }
            catch (System.Exception ex)
            {
                _logger.LogError($"Error creating new catalog produtct: {product}.");
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("UpdateProduct")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> UpdateProduct([FromBody] Product product)
        {

            try
            {
                await _productsRepository.UpdateAsync(product.Id, product);
                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPut("DisableProduct/{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> DisableProduct(string id)
        {

            try
            {
                await _productsRepository.DisableAsync(id);
                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpDelete]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> DeleteProducts()
        {

            try
            {
                await _productsRepository.DeleteProductsAsync();
                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

    }

}
