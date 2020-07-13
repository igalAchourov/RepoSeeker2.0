import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginatedResult, Pagination } from '../Models/pagination';
import { Repository } from '../Models/repository';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }


  baseUrl: string = "https://localhost:5001/api/Search";

  search(userInput?, page?, itemsPerPage?) {

    const paginatedResult: PaginatedResult<Repository[]> = new PaginatedResult<Repository[]>();
    let params = new HttpParams();


    if (page != null && itemsPerPage != null) {
      params = params.append('userInput',userInput);
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }



    return this.http.get<any>(this.baseUrl, { observe: 'response', params }).pipe(


      map(response => {

        paginatedResult.result =response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'))
        }
        return paginatedResult;

      })
    );
  }





}
