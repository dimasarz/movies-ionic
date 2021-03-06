import { SearchType, MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  result: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;


  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.result = this.movieService.searchData(this.searchTerm, this.type);
  }

}
