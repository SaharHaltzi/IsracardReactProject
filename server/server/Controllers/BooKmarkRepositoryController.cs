using server.Models;
using server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.SessionState;



 namespace server.Controllers
{
    public class BookmarkRepositoryController : ApiController
    {
       
        [HttpPost]
        public bool SetAsBookmark(Repository rep)
        {

            if(HttpContext.Current.Session["repositories"] == null)
            {
                HttpContext.Current.Session["repositories"] = new List<Repository>();
            }

            var repos = (HttpContext.Current.Session["repositories"] as List<Repository>);
            repos.Add(rep);

            HttpContext.Current.Session["repositories"] = repos;

            return true;
        }
      
        [HttpGet]
        public List<Repository> GetUserBookmarks()
        {

             var repositories = HttpContext.Current.Session["repositories"] as List<Repository>;
            return repositories;
        }
     

    }
}
