//Getaway es una abstraccion que define el que mas no el como
//El getaway es como un espacialista para obtener el mismo resultado

import { Observable } from "rxjs";
import { Album } from "../album";

export abstract class AlbumGetaway {
  abstract getById(id: string): Observable <Album>;
  abstract getAll(): Observable <Array<Album>>;
  abstract saveNew(_album: Album): Observable<void>;
}