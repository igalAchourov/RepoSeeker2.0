import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './Shared/search/search.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService} from 'ngx-cookie-service';
import { FavoriteReposComponent } from './Shared/favorite-repos/favorite-repos.component';
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';
import { routing } from './router';
import { NavComponent } from './Shared/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FavoriteReposComponent,
    PageNotFoundComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    routing
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
