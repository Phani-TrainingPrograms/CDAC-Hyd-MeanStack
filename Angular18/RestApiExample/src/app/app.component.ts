import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from './Models/movie';
import { MovieService } from './Services/movie.service';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'movie-app';
  movies : Movie[] = [];

  constructor(private movieService : MovieService){

  }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((data : Movie[])=>{
      this.movies = data;
    })
  }


}
