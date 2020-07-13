using System.Threading.Tasks;
using RepositorySeeker.API.Helpers;
using RepositorySeeker.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;
using Newtonsoft.Json;
using System.Linq;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Xaml;

namespace RepositorySeeker.API.Data
{
    public class SearchRepository : ISearchRepository
    {


        public async Task<PagedList<Repository>> SearchRepos(UserParams userParams)
        {
            var httpClient = HttpClientFactory.Create();

            var request = new HttpRequestMessage(HttpMethod.Get, "https://api.github.com/search/repositories?q=" + userParams.UserInput);
            request.Headers.Add("User-Agent", "igalAchourov");

            var response = await httpClient.SendAsync(request);

            var reposFromApi = response.Content.ReadAsStringAsync();




            var jsonReposFromApi = JsonConvert.SerializeObject(reposFromApi.Result);

            var des = JsonConvert.DeserializeObject<string>(jsonReposFromApi);


            string reposFromJson = getBetween(des, "\"items\":", "]") + "]";


            var myDeserializedRepos = JsonConvert.DeserializeObject<List<Root>>(reposFromJson);

            var finalRepos = new List<Repository>();
            foreach (var repo in myDeserializedRepos)
            {
                finalRepos.Add(new Repository(repo.id, repo.full_name, repo.owner.avatar_url));
            }




            return await PagedList<Repository>.CreateAsync(finalRepos, userParams.PageNumber, userParams.PageSize);




        }

        public static string getBetween(string strSource, string strStart, string strEnd)
        {
            if (strSource.Contains(strStart) && strSource.Contains(strEnd))
            {
                int Start, End;
                Start = strSource.IndexOf(strStart, 0) + strStart.Length;
                End = strSource.IndexOf(strEnd, Start);
                return strSource.Substring(Start, End - Start);
            }

            return "";
        }


    }
}