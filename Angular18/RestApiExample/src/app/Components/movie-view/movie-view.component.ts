import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Models/movie';
import { MovieService } from '../../Services/movie.service';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-view.component.html',
  styles: ``
})
export class MovieViewComponent implements OnInit {
  //create a field to hold the selected record
  selectedMovie : Movie = {} as Movie;
  //create a field to hold the id of the record that U get from the Querystring. 
  id : number = 0;
  //create a constructor to inject the service and a service to get the routed information.
  constructor(private service : MovieService, private activatedRoute : ActivatedRoute) {
    
  }

  //implement the OnInit interface to set the value from the Http to the field that holds the record. 
  ngOnInit(): void {
    //get the Id:
    this.activatedRoute.paramMap.subscribe((parameters : ParamMap) =>{
      this.id = parseInt(parameters.get("id")!)
      this.service.getMovieById(this.id).subscribe((data : Movie)=>{
        this.selectedMovie = data;
      })      
    })
  }
}
