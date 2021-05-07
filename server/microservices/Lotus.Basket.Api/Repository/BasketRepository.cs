using System.Threading.Tasks;
using Lotus.Basket.Api.Entities;
using Lotus.Basket.Api.Interfaces.Basket;
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;

namespace Lotus.Basket.Api.Repository
{
    public class BasketRepository : IBasketRepository
    {
        private readonly IDistributedCache _redis;

        public BasketRepository(IDistributedCache redis)
        {
            _redis = redis;
        }
        public async Task<ShoppingCart> GetBasket(string Username)
        {
            var basket = await _redis.GetStringAsync(Username);
            if (string.IsNullOrEmpty(basket))
            {
                return null;
            }

            return JsonConvert.DeserializeObject<ShoppingCart>(basket);
        }

        public async Task<ShoppingCart> UpdateBasket(ShoppingCart cart)
        {
            await _redis.SetStringAsync(cart.UserId, JsonConvert.SerializeObject(cart));

            return await GetBasket(cart.UserId);
        }

        public async Task DeleteBasket(string Username)
        {
            await _redis.RemoveAsync(Username);
        }

    }

}
