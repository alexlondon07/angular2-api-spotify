import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  termino: string = '';
  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchArtis() {
    try {
      if (this.termino) {
        this._spotifyService.getArtist(this.termino).subscribe();
      }
    } catch (error) {
    }
  }

}
