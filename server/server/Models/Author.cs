using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace server.Models
{
    public class Author
    {
        public readonly string username;
        public readonly string avatarUrl;

        public Author(string username, string avatarUrl)
        {
            this.username = username;
            this.avatarUrl = avatarUrl;
        }


    }
}