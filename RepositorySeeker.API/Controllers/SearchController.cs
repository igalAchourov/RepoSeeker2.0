using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RepositorySeeker.API.Data;
using RepositorySeeker.API.Helpers;
using AutoMapper;
using System.Collections.Generic;
using RepositorySeeker.API.Models;



namespace RepositorySeeker.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SearchController : ControllerBase
    {
        private readonly ISearchRepository _repo;
        private readonly IMapper _mapper;
        public SearchController(ISearchRepository repo, IMapper mapper)
        { _repo = repo;
            _mapper = mapper;
           
        }


        [HttpGet]
        public async Task<IActionResult> SearchRepos([FromQuery] UserParams userParams)
        {


            var repos = await _repo.SearchRepos(userParams);

            var reposToReturn = _mapper.Map<IEnumerable<Repository>>(repos);
            
            Response.AddPagination(repos.CurrentPage, repos.PageSize, repos.TotalCount, repos.TotalPages);

            return Ok(reposToReturn);

        }



    }
}