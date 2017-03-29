import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];
  id: string;

  urlSearch: string = 'https://api.spotify.com/v1/search';
  urlArtist: string = 'https://api.spotify.com/v1/artists';

  constructor(private _http: Http) { }

  /**
   * Funcion para obtener los artistas
   * @param {string} termino
   * @returns
   * @memberOf SpotifyService
   */
  getArtist(termino: string) {
    try {
      if (termino) {
        let query = `?q=${termino}&type=artist`;
        let url = this.urlSearch + query;
        return this._http.get(url)
          .map(res => {
            this.artists = (res.json().artists.items);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Funcion para obtener la informacion detallada de un artista
   * @param {string} id
   * @returns
   * @memberOf SpotifyService
   */
  getArtistDetail(id: string) {
    try {
      if (id) {
        let query = `/${id}`;
        let url = this.urlArtist + query;

        return this._http.get(url)
          .map(res => {
            return (res.json());
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  getTop(id: string) {
    try {
      if (id) {
        let query = `/${id}/top-tracks?country=US`;
        let url = this.urlArtist + query;

        return this._http.get(url)
          .map(res => {
            console.log(res.json().tracks);
            return (res.json().tracks);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

}
