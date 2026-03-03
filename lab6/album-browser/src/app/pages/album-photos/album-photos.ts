import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';


@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos implements OnInit{

  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getPhotosByAlbum(id).subscribe(data => {
      this.photos = data;
      this.cdr.detectChanges();
    })
  }

  goBack(){
    window.history.back();
  }

}
