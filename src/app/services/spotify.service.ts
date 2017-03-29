import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];
  urlSearch: string = 'https://api.spotify.com/v1/search';

  constructor(private _http: Http) { }


  getArtist(termino: string) {
    try {
      if (termino) {
        let query = `?q=${termino}&type=artist`;
        let url = this.urlSearch + query;
        return this._http.get(url)
          .map(res => {
            this.artists = res.json().artists.items;
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

}
