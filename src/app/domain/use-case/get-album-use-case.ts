//Los casos de uso usan los getaway para resolver el caso de uso sin importar quien sea el getaway
import { Injectable } from "@angular/core";
import { AlbumGetaway } from "../models/Album/getaway/album-getaway";
import { Observable } from "rxjs";
import { Album } from "../models/Album/album";

@Injectable({
  providedIn:"root"
})

export class GetAlbumUseCases {
  constructor( private _albumGetaway: AlbumGetaway) {}

  getAlbumById(id: string): Observable <Album> {
    return this._albumGetaway.getById(id);
  }

  getAllAlbums(): Observable <Array<Album>> {
    return this._albumGetaway.getAll();
  }
}
