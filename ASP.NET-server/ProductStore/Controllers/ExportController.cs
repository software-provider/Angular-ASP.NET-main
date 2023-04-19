using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProductStore.Controllers
{
    public class ExportController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public FileResult DownloadPDF(int id)
        {
            string dd = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "data.pdf");
            byte[] fileBytes = System.IO.File.ReadAllBytes(dd);
            string fileName = "data.pdf";
            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Pdf, fileName);
        }

        public FileResult DownloadXLSX(int id)
        {
            string dd = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "data.xlsx");
            byte[] fileBytes = System.IO.File.ReadAllBytes(dd);
            string fileName = "data.xlsx";
            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
        }
    }
}
