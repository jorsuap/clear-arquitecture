import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AlbumGetaway } from '../domain/models/Album/getaway/album-getaway';
import { AlbumApiService } from '../infrastructure/driven-adapter/album-api/album-api.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(withFetch()),
    { provide: AlbumGetaway, useClass: AlbumApiService }
  ]
};
