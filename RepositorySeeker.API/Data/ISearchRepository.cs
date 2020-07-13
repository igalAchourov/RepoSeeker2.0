using System.Threading.Tasks;
using RepositorySeeker.API.Helpers;
using RepositorySeeker.API.Models;

namespace RepositorySeeker.API.Data
{
    public interface ISearchRepository
    {
        // Task<PagedList<Repository>> SearchRepos(UserParams userParams , string input);
        Task<PagedList<Repository>> SearchRepos( UserParams userParams);
    }
}