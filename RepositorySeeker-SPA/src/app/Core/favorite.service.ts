import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'
import { Repository } from '../Models/repository';
import { map } from 'rxjs/operators';
import { Observable, pipe, throwError } from 'rxjs';
import { AlertifyService } from './alertify.service';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {


  baseUrl: string = "https://localhost:5001/api/";
  repos: any[] = [];
  private sessionKey = "mySessionKey";

  constructor(private http: HttpClient, private cookieService: CookieService, private alertify: AlertifyService) {}





  saveRepo(data: Repository) {

    if (this.checkIfExists(data.RepoId)) {

      this.repos.push(data);
      var jsonArray = JSON.stringify(this.repos);
      this.saveSession(jsonArray);
      this.alertify.success('Succesfully added!');

    }
    else {
      this.alertify.warning("Already in favorite");
    }

    //// using .Net session
    // return this.http.post(this.baseUrl + dataType, data);
  };


  getRepos() {

    let repos = this.getSession();


    if (repos != null) {
      return repos;
    }

    ////  using .Net session
    //return this.http.get<T>(this.baseUrl + "Repositories");
  }


  saveSession(value: any) {
    sessionStorage.setItem(this.sessionKey, value);
  }

  getSession() {
    let repos = sessionStorage.getItem(this.sessionKey);


    return JSON.parse(repos);
  }


  checkIfExists(repoId: number) {

    let repos = this.getSession();

    if (repos != undefined) {

      for (let i = 0; i < repos.length; i++) {
        if (repos[i].RepoId == repoId) {
          return false;
        }
      }
    }
    return true;



  }


}



