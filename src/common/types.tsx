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

export interface Response {
  genres: Genre[];
  videos: Video[];
}

export interface Filter {
  release_year: number[];
  genre_id: number[];
}