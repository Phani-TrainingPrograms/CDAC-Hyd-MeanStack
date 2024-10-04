import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Models/movie';
import { MovieService } from '../../Services/movie.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-list.component.html',
  styles: ``
})
export class MovieListComponent implements OnInit {
  //Create a field to store movies
  movieList : Movie[] = [];

  //Create a constructor to inject the Movieservice object
  constructor(private service: MovieService){

  }
  ngOnInit(): void {
    this.service.getAllMovies().subscribe((data : Movie[])=>{
      this.movieList = data;
    })
  }
  //Implement OnInit to get the data from the service and set it to the movies field. 
}
