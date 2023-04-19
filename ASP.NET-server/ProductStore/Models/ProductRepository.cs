using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProductStore.Models
{
    public class ProductRepository : IProductRepository
    {
        private List<Product> products = new List<Product>();
        private int _nextId = 1;

        public ProductRepository()
        {
            Add(new Product { EMP = "Tomato soup", Suffix = "Groceries", Amount = 1.39M, StartDate = DateTime.Now, ResponceType = "A", ResponceDate = DateTime.Now, Comment = "Comment", EditBy= "Lee", ViewResponded = false, CLosed = false });
            Add(new Product { EMP = "Yo-yo", Suffix = "Toys", Amount = 3.75M, StartDate = DateTime.Now, ResponceType = "A", ResponceDate = DateTime.Now, Comment = "Comment", EditBy = "Lee", ViewResponded = false, CLosed = false });
            Add(new Product { EMP = "Hammer", Suffix = "Hardware", Amount = 16.99M, StartDate = DateTime.Now, ResponceType = "B", ResponceDate = DateTime.Now, Comment = "Comment", EditBy = "Bee", ViewResponded = true, CLosed = true });
        }

        public IEnumerable<Product> GetAll()
        {
            return products;
        }

        public Product Get(int id)
        {
            return products.Find(p => p.Id == id);
        }

        public Product Add(Product item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            item.Id = _nextId++;
            products.Add(item);
            return item;
        }

        public void Remove(int id)
        {
            products.RemoveAll(p => p.Id == id);
        }

        public bool Update(Product item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            int index = products.FindIndex(p => p.Id == item.Id);
            if (index == -1)
            {
                return false;
            }
            products.RemoveAt(index);
            products.Add(item);
            return true;
        }
    }
}