import { Routes } from '@angular/router';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { MovieAddComponent } from './Components/movie-add/movie-add.component';
import { MovieViewComponent } from './Components/movie-view/movie-view.component';
import { MovieEditComponent } from './Components/movie-edit/movie-edit.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
    {path : '', component: MovieListComponent},
    {path : 'addMovie', component: MovieAddComponent},
    {path : 'view/:id', component: MovieViewComponent},
    {path : 'edit/:id', component: MovieEditComponent},
    {path : '**', component: NotFoundComponent},
];
