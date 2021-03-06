using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RepositorySeeker.API.Helpers
{
    public class PagedList<T> : List<T>
    {

        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }


        public PagedList(List<T> items, int count, int pageNumber, int pageSize)
        {
            TotalCount = count;
            PageSize = pageSize;
            CurrentPage = pageNumber;
            //calculate the number of total pages 
            TotalPages = (int)Math.Ceiling(count / (double)pageSize);
            //add the elements to the list
            this.AddRange(items);

        }


        // //return a new instance of PageList
        // public static async Task<PagedList<T>> CreateAsync(IQueryable<T> source, int pageNumber, int pageSize)
        // {
        //     var count = await source.CountAsync();
        //     //get the items from our pageNumber
        //     var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
        //     return new PagedList<T>(items, count, pageNumber, pageSize);
        // }
        
        public static async Task<PagedList<T>> CreateAsync(List<T> source, int pageNumber, int pageSize)
        {
            var count =  source.Count;
            //get the items from our pageNumber
            var items =  source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList();
            return new PagedList<T>(items, count, pageNumber, pageSize);
        }

    }


 


}