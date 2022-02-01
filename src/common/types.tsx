export interface Video {
  id: number;
  artist: string;
  title: string;
  release_year: number;
  genre_id: number;
  image_url: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface State {
  genres: Genre[];
  videos: Video[];
  isGetting: boolean;
}

export interface Filter {
  [key: string]: number[];
}
