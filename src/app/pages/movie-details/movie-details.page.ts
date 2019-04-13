import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;
  constructor(
    private activadRoute: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    const id = this.activadRoute.snapshot.paramMap.get('id');

    this.movieService.getDetails(id).subscribe(result => {
      console.log('details: ', result);
      this.information = result;
    });
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
