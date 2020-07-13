import { Routes, RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component'
import { SearchComponent } from './Shared/search/search.component';
import { FavoriteReposComponent } from './Shared/favorite-repos/favorite-repos.component';



export const routes: Routes = [

    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'favorite', component: FavoriteReposComponent },
    { path: '**', component: PageNotFoundComponent }
]


export const routing = RouterModule.forRoot(routes);
