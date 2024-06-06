export interface ArtworksList {
  data: Array<any>;
}

export interface ArtworksData {
  id: string;
  title: string;
  thumbnail: any;
}

export interface ArtworkData {
  id: string;
  data: any;
  title: string;
}

export class ArtworkDetail {
  id: string;
  title: string;
  artist_display: string;
  date_start: number;
  medium_display: string;
  short_description: string;
  dimensions: string;
  image_url: string;

  constructor(
    id: string,
    title: string,
    artist_display: string,
    date_start: number,
    medium_display: string,
    short_description: string,
    dimensions: string,
    image_url: string
  ) {
    this.id = id;
    this.title = title;
    this.artist_display = artist_display;
    this.date_start = date_start;
    this.medium_display = medium_display;
    this.short_description = short_description;
    this.dimensions = dimensions;
    this.image_url = image_url;
  }
}
