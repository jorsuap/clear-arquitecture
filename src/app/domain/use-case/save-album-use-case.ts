import { Injectable } from "@angular/core";
import { AlbumGetaway } from "../models/Album/getaway/album-getaway";
import { Album } from "../models/Album/album";
import { Observable } from "rxjs";

@Injectable({
  providedIn:"root"
})

export class SaveAlbumUseCase {
  constructor( private _albumGetaway: AlbumGetaway) {}

  saveAlbum(_album: Album): Observable<void> {
    return this._albumGetaway.saveNew(_album);
  }
}
