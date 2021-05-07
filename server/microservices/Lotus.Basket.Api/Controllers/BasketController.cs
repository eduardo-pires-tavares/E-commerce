using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Lotus.Basket.Api.Entities;
using Lotus.Basket.Api.Interfaces.Basket;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Lotus.Basket.Api.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class BasketController : ControllerBase
    {
        private readonly ILogger<BasketController> _logger;
        private readonly IBasketRepository _repository;

        public BasketController(ILogger<BasketController> logger, IBasketRepository repository)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet("{userId}", Name = "GetBasket")]
        [ProducesResponseType(typeof(ShoppingCart), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<ShoppingCart>> GetBasket(string username)
        {
            try
            {
                var basket = await _repository.GetBasket(username);

                return Ok(basket ?? new ShoppingCart() { UserId = username });
            }
            catch (System.Exception)
            {
                return BadRequest();
            }
        }

        [HttpPut]
        [ProducesResponseType(typeof(ShoppingCart), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<ShoppingCart>> UpdateBasket([FromBody] ShoppingCart cart)
        {
            try
            {
                var basket = await _repository.UpdateBasket(cart);

                return Ok(basket);

            }
            catch (System.Exception)
            {
                return BadRequest();
            }

        }

        [HttpDelete("{userId}", Name = "DeleteBasket")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<ActionResult<ShoppingCart>> DeleteBasket(string username)
        {
            try
            {
                await _repository.DeleteBasket(username);

                return Ok();
            }
            catch (System.Exception)
            {
                return BadRequest();
            }
        }

    }
}
