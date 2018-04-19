using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace server.Services
{
    /*
     * "items": [
    {
      "id": 114111435,
      "name": "ngx-filesize",
      "full_name": "amitdahan/ngx-filesize",
      "owner": {
        "login": "amitdahan",
        "id": 9748762,
        "avatar_url": "https://avatars1.githubusercontent.com/u/9748762?v=4",
     */



    public class RepositoryResponse
    {
        public RepositoryItemResponse[] items;
    }

    public class RepositoryItemResponse
    {
        public string name;
        public owner owner;
    }

    public class owner
    {
        public string login;
        public string avatar_url;
    }

    public class GithubService
    {
        const string url = "https://api.github.com/search/repositories?q=";

        public async Task<Repository[]> Search(string query)
        {
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Add("User-Agent", "C# App");

            HttpResponseMessage response = await client.GetAsync(url + Uri.EscapeDataString(query));

            RepositoryResponse data = await response.Content.ReadAsAsync<RepositoryResponse>();

            Repository[] repositories = GetRepositoriesFromRepositoryResponse(data);

            return repositories;
        }

        public Repository[] GetRepositoriesFromRepositoryResponse( RepositoryResponse data)
        {
            Repository[] repositories = new Repository[data.items.Length];
            int i = 0;

            foreach(RepositoryItemResponse item in data.items)
            {
                repositories[i] = new Repository(item.name, new Author(item.owner.login, item.owner.avatar_url));
                i++;
            }

            return repositories;
        }
    }
}