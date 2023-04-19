using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using System.Web.Mvc;
using Newtonsoft.Json;
using ProductStore.Models;
using System.IO;
using System.Web;
using System.Text;
using System.Net.Http.Headers;

namespace ProductStore.Controllers
{
    public class ProductsController : ApiController
    {
        static readonly IProductRepository repository = new ProductRepository();

        public IEnumerable<Product> GetAllProducts()
        {
            return repository.GetAll();
        }

        public IEnumerable<dynamic> GetProduct(int id)
        {
            var item = new { 
                Date= DateTime.Now,
                Docket = "asdas",
                LineNo = "sadasda",
                Id = 1,
                EMP = "Asdasd",
                Sufix = "asd",
                Steps = "asd",
                Eligibility = "E",
                Amount = 235d,
            };
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return new List<dynamic>() { item, item, item }; ;
        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return repository.GetAll().Where(
                p => string.Equals(p.Suffix, category, StringComparison.OrdinalIgnoreCase));
        }

        public HttpResponseMessage PostProduct(Product item)
        {
            var error = validateProduct(item);
            if (error.Count > 0)
            {
                var eresponse = Request.CreateResponse<List<string>>(HttpStatusCode.NotAcceptable, error);
                return eresponse;
            }

            item = repository.Add(item);
            var response = Request.CreateResponse<Product>(HttpStatusCode.Created, item);


            string uri = Url.Link("DefaultApi", new { id = item.Id });
            response.Headers.Location = new Uri(uri);
            return response;
        }

        public HttpResponseMessage PutProduct(int id, Product product)
        {
            product.Id = id;
            return Request.CreateResponse<Product>(HttpStatusCode.OK, product);
        }

        public void DeleteProduct(int id)
        {
            repository.Remove(id);
        }

        //public HttpResponseMessage GetProductPDF(int id)
        //{
        //    string fullPath = AppDomain.CurrentDomain.BaseDirectory + "/data.pdf";
        //    if (File.Exists(fullPath))
        //    {

        //        HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
        //        var fileStream = new FileStream(fullPath, FileMode.Open);
        //        response.Content = new StreamContent(fileStream);
        //        response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");
        //        response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
        //        response.Content.Headers.ContentDisposition.FileName = "data.pdf";
        //        return response;
        //    }

        //    return new HttpResponseMessage(HttpStatusCode.NotFound);
        //}

        List<string> validateProduct(Product product)
        {
            List<string> errors = new List<string>();
            //if(product.Name == String.Empty)
            //{
            //    errors.Add("Name cannot be empty");
            //}
            //if (product.Category == String.Empty)
            //{
            //    errors.Add("Category cannot be empty");
            //}
            //if (product.Price < 0 || product.Price > 9999)
            //{
            //    errors.Add("Price must in range 0 to 9999");
            //}
            return errors;
        }
    }
}
