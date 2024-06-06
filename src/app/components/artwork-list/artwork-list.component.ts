import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ArtworksData } from 'src/app/models/artworks.dto';
import { ArtworksService } from 'src/app/services/artworks.service';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css'],
  animations: [
    trigger('loading', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(400, [animate('0.5s ease-in', style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ArtworkListComponent implements OnInit {
  loading: boolean;
  artworks: ArtworksData[] = [];
  card: boolean;
  grid: boolean;

  constructor(private artworksService: ArtworksService) {
    this.loading = true;
    this.card = true;
    this.grid = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.artworksService.getAllArtworks().subscribe((list) => {
        this.artworks = list.data;
      });

      this.loading = false;
    }, 500);
  }

  toggleCard(): void {
    this.card = true;
    this.grid = false;
  }

  toggleGrid(): void {
    this.card = false;
    this.grid = true;
  }
}
