import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/Core/search.service';
import { PaginatedResult, Pagination } from 'src/app/Models/pagination';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { Repository } from 'src/app/Models/repository';
import { FavoriteService } from 'src/app/Core/favorite.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pageNumber: number = 1;
  pageSize: number = 6;
  userInput: string;
  repoDataType: string = "Repositories"
  repositories: Repository[];
  pagination: Pagination;

  constructor(private searchService: SearchService, private favoriteService: FavoriteService) { }

  ngOnInit() {
  }


  pageChanged(event: any): void {

    this.pageNumber = event.page;
    this.pagination.currentPage = event.page;
    this.search();

  }


  search() {
    this.searchService.search(this.userInput, this.pageNumber, this.pageSize).subscribe(data => {
      this.repositories = data.result;
      this.pagination = data.pagination;
    });
  }


  addRepoToFavorite(i: number, r: string, a: string) {


    this.favoriteService.saveRepo(new Repository(i, r, a));

  }


  getFavorite() {
    this.favoriteService.getRepos();
  }



}
