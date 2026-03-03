import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService, Album } from '../../services/album';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class Albums implements OnInit {
  albums: Album[] = [];

  constructor(
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {    
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.cdr.detectChanges();
    })
  }

  delete(id: number){
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
      this.cdr.detectChanges();
    })
  }

  goToDetail(id: number){
    this.router.navigate(['/albums', id]);
  }
}
