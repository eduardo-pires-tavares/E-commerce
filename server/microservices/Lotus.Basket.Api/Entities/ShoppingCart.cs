using System.Collections.Generic;
using System.Linq;

namespace Lotus.Basket.Api.Entities
{
    public class ShoppingCart
    {
        public string UserId { get; set; }

        public List<ShoppingCartItem> Items { get; set; } = new();

        public int ItemCount { get { return Items?.Count ?? 0; } }

        public decimal TotalPrice
        {
            get
            {

                decimal totalPrice = 0;

                foreach (var item in Items)
                {
                    totalPrice += item.Price;
                }

                return totalPrice;

            }
        }


    }
}
