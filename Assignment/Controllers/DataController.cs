using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Assignment.Controllers
{
    public class DataController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

       
        // POST api/<controller>
        public List<Student> Post([FromBody] string value)
        {
            return new List<Student>()
            {
                new Student()
                {
                    Name="Alice",
                    Age=20,
                    Hobbies=new List<string>(){ "reading", "swimming", "coding" }

                },
                new Student()
                {
                    Name="Bob",
                    Age=22,
                    Hobbies=new List<string>(){ "painting", "dancing", "singing" }

                }
            };
        }

    }
}