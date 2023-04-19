using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ProductStore.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string EMP { get; set; }
        public string Suffix { get; set; }
        public DateTime StartDate { get; set; }
        public decimal Amount { get; set; }
        public string ResponceType { get; set; }
        public DateTime ResponceDate { get; set; }
        public string Comment { get; set; }
        public string EditBy { get; set; }
        public bool ViewResponded { get; set; }
        public bool CLosed { get; set; }
    }
}