import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworkData, ArtworksList } from '../models/artworks.dto';

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  constructor(private http: HttpClient) {}

  getAllArtworks(): Observable<ArtworksList> {
    return this.http.get<ArtworksList>(
      'https://api.artic.edu/api/v1/artworks/search?q=impressionism+painting&query[term][is_public_domain]=true&limit=15'
    );
  }

  getArtworkById(id: string): Observable<ArtworkData> {
    return this.http.get<ArtworkData>(
      'https://api.artic.edu/api/v1/artworks/' + id
    );
  }
}
