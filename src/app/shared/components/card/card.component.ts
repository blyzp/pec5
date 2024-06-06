import { Component, Input } from '@angular/core';
import { ArtworksData } from 'src/app/models/artworks.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() data: ArtworksData = { id: '', title: '', thumbnail: {} };
}
