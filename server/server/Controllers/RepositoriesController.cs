using server.Models;
using server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace server.Controllers
{
    public class RepositoriesController : ApiController
    {
        public async Task<IEnumerable<Repository>> GetRepositories(string input)
        {
            Repository[] repositories =  await (new GithubService()).Search(input);

            return repositories;
        }

        public String Test()
        {
            return "sahar";
        }
    }

    
}
