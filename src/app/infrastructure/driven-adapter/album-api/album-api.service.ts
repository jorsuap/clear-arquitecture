import { Injectable } from '@angular/core';
import { AlbumGetaway } from '../../../domain/models/Album/getaway/album-getaway';
import { Observable } from 'rxjs';
import { Album } from '../../../domain/models/Album/album';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumApiService extends AlbumGetaway {

  private _url = 'https://jsonplaceholder.typicode.com/albums/';

  constructor(private _http: HttpClient) {super();}

  getById(id: string): Observable<Album> {
    return this._http.get<Album>(this._url+id);
  }

  getAll(): Observable<Array<Album>> {
    return this._http.get<Array<Album>>(this._url);
  }

  saveNew(_album: Album): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
