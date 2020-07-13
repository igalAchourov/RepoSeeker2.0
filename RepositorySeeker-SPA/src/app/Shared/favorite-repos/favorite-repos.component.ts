import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/Core/alertify.service';
import { FavoriteService } from 'src/app/Core/favorite.service';
import { Repository } from 'src/app/Models/repository';

@Component({
  selector: 'app-favorite-repos',
  templateUrl: './favorite-repos.component.html',
  styleUrls: ['./favorite-repos.component.css']
})
export class FavoriteReposComponent implements OnInit {


  repos: Repository[] = [];

  constructor(private favoriteService: FavoriteService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.repos = this.favoriteService.getRepos();
    if (this.repos == undefined) {
      this.alertify.error("No favorite repositories");
    }
  }




  

}
