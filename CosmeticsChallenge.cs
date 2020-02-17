using System;
using System.Collections.Generic;

namespace Store
{
    interface IProductRepository {
        Product GetProduct (Guid id);
        IEnumerable<Product> GetProducts (ProductSearchOptions options);
        
        // ... more product-related operations go here.
    }

    // This implementation of IProductRepository will retrieve product information 
    // from a relational (SQL) database. Implementation details like retrieving using an OR mapper
    // or directly executing stored procedures is not provided. 
    // Other performance mechanisms/techniques (like caching) is also not provided
    class SqlProductRepository : IProductRepository
    {
        public Product GetProduct(Guid id) {
            throw new NotImplementedException();
        }

        public IEnumerable<Product> GetProducts(ProductSearchOptions options) {
            throw new NotImplementedException();
        }
    }

    // This implementation of IProductRepository will retrieve product information
    // from No-SQL data stores (e.g.: MongoDB, DynamoDB)
    class NoSqlProductRepository : IProductRepository
    {
        public Product GetProduct(Guid id) {
            throw new NotImplementedException();
        }

        public IEnumerable<Product> GetProducts(ProductSearchOptions options) {
            throw new NotImplementedException();
        }
    }

    // This implementation of IProductRepository allows us to retrieve product
    // information by calling a web service (SOAP or REST API for example) 
    // through HTTP.
    class ApiProductRepository : IProductRepository
    {
        public Product GetProduct(Guid id) {
            throw new NotImplementedException();
        }

        public IEnumerable<Product> GetProducts(ProductSearchOptions options) {
            throw new NotImplementedException();
        }
    }

    class Product {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Rating { get; set; }
        
        // .. more properties
    }

    class ProductSearchOptions {
        public string Name { get; set; }
        public decimal MinPrice { get; set; }
        public decimal MaxPrice { get; set; }
        public int MinRating { get; set; }
        public int MaxRating { get; set; }

        // ... more search options/filters
    }
    
    class Client {
        // Using Dependency Injection for IProductRepository (bootstrap code not included)
        // allows us to pass a concrete implementation at runtime 
        // and the consumer will be agnostic of such change.
        // In other words this class will not need to worry of such change.
        public Client(IProductRepository repo) {
            _repo = repo;
        }

        public void DoWork() {
            var options = new ProductSearchOptions { Name = "Test", MaxPrice = 100, MinRating = 3 };
            var products = _repo.GetProducts(options);
            
            // ... more code goes here
        }

        IProductRepository _repo;
    }
}
