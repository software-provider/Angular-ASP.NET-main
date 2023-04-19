using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using Newtonsoft.Json;
using ProductStore.Models;

namespace ProductStore.Controllers
{
    public class LoginController : ApiController
    {

        public HttpResponseMessage GetLogin()
        {
            var reresponse = Request.CreateResponse(HttpStatusCode.OK, new { Token = "asdasdasdasd" });
            return reresponse;
        }
    }
}
