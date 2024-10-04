import { Component } from '@angular/core';
import { Movie } from '../../Models/movie';
import { MovieService } from '../../Services/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './movie-add.component.html',
  styles: ``
})
export class MovieAddComponent {
  //create an object of the movie class
  movie : Movie = {} as Movie;
  message : any ={};
  //constructor with DI of movieservice
  constructor(private service : MovieService, private router : Router) {
    
  }
  //handle the event of click , so that the object is posted to the service. 
  onSubmit(){
    this.service.addMovie(this.movie).subscribe((data)=>{
      alert("Record is added successfully to the System")
      this.router.navigate(['/'])
    })
  }
}
