import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit{
  album: any;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.cdr.detectChanges();
    })
  }

  goBack(){
    this.router.navigate(['/albums']);
  }

  save(){
    this.albumService.updateAlbum(this.album).subscribe(data => {
      console.log('Updated', data);
      // this.router.navigate(['/albums']);
      this.cdr.detectChanges();
    })
  }

  viewPhotos(){
    this.router.navigate(['/albums', this.album.id, 'photos']);

  }

}
