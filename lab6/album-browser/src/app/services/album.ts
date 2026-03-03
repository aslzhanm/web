import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient){}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  deleteAlbum(id: number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  updateAlbum(album: Album) {
    return this.http.put<Album>(
      `https://jsonplaceholder.typicode.com/albums/${album.id}`,
      album
    );
  }

  getPhotosByAlbum(id: number){
    return this.http.get<any[]>(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );
  }

}
