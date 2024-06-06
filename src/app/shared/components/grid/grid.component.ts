import { Component, Input } from '@angular/core';
import { ArtworksData } from 'src/app/models/artworks.dto';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() data: ArtworksData[] = [];

  displayedColumns: string[] = ['id', 'title', 'text'];
}
