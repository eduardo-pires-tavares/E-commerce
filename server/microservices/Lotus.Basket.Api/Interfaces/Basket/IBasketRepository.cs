using System.Threading.Tasks;
using Lotus.Basket.Api.Entities;

namespace Lotus.Basket.Api.Interfaces.Basket
{
    public interface IBasketRepository
    {
        Task<ShoppingCart> GetBasket(string Username);
        Task<ShoppingCart> UpdateBasket(ShoppingCart cart);
        Task DeleteBasket(string Username);
    }
}
