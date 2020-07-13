using System.Collections.Generic;

namespace RepositorySeeker.API.Models
{
    public class Repository
    {
        public int RepoId { get; set; }
        public string RepoName { get; set; }
        public string AvatarUrl { get; set; }


        public Repository(int id,string repoName,string avatarUrl)
        {
            RepoId=id;
            RepoName=repoName;
            AvatarUrl=avatarUrl;
        }
    }






    
}