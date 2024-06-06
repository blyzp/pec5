import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtworkDetail } from 'src/app/models/artworks.dto';
import { ArtworksService } from 'src/app/services/artworks.service';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.css'],
})
export class ArtworkDetailComponent implements OnInit {
  isMobile: boolean;
  detail: ArtworkDetail;
  show: boolean;
  year: number;

  constructor(
    private artworksService: ArtworksService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private observer: BreakpointObserver
  ) {
    this.isMobile = true;
    this.detail = new ArtworkDetail('', '', '', 0, '', '', '', '');
    this.show = false;
    this.year = 0;
  }

  ngOnInit(): void {
    this.observer.observe(['(max-width: 576px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    const identifier = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.artworksService.getArtworkById(identifier).subscribe((artwork) => {
      if (!artwork) {
        return this.router.navigateByUrl('/');
      }

      this.detail = {
        id: artwork.data.id,
        title: artwork.data.title,
        artist_display: artwork.data.artist_display,
        date_start: artwork.data.date_start,
        medium_display: artwork.data.medium_display,
        short_description: artwork.data.short_description,
        dimensions: artwork.data.dimensions,
        image_url: `https://www.artic.edu/iiif/2/${artwork.data.image_id}/full/843,/0/default.jpg`,
      };

      if (this.detail.short_description === null) {
        this.detail.short_description = '-';
      }

      this.year = ((this.detail.date_start - 1801) * 100) / (1906 - 1801);

      return;
    });
  }

  showDetails(): void {
    this.show = true;
  }
}
