using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace server.Models
{
    public class Repository
    {
        public readonly string name;
        public readonly Author author;

        public Repository(string name, Author author)
        {
            this.name = name;
            this.author = author;
        }
    }
}