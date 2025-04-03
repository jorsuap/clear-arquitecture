import { Component, OnInit, inject } from '@angular/core';
import { GetAlbumUseCases } from '../../../domain/use-case/album-use-case';
import { Album } from '../../../domain/models/Album/album';
import { Observable } from 'rxjs';
import { CircularProgressComponent } from '../../components/circular-progress/circular-progress.component';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CircularProgressComponent],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})

export class AlbumComponent implements OnInit {
  response$: Observable<Album> | undefined;
  datos?: Album;

  constructor(private _getAlbumUseCase: GetAlbumUseCases) { }

  ngOnInit(): void {
    this.response$ = this._getAlbumUseCase.getAlbumById('20');
    this.response$.subscribe(
      (data: Album) => {
        this.datos = data;
      }
    );

  }
}
