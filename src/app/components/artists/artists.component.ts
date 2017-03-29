import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styles: []
})
export class ArtistsComponent implements OnInit {

  artist: any;
  top:any[];

  constructor(private _activatedRouter: ActivatedRoute, private _spotifyService: SpotifyService) { }

  ngOnInit() {
    try {
      this._activatedRouter.params
        .map(parametro => parametro['id'])
        .subscribe(id => {

          this._spotifyService.getArtistDetail(id)
            .subscribe(data => this.artist = data);

          this._spotifyService.getTop(id)
            .subscribe(data => this.top = data);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
