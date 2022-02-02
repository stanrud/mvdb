'use strict';

/**
 * Checks if string contains another string
 * @param {*} str 
 * @param {*} value 
 * @returns A boolean value which is true if the value is found within str
 */
 const stringIncludes = (str, value) => str.toString().toLowerCase().includes(value);

/**
 * Filter array of videos based on provided search string and array of genres
 * @param {*} videos Array of music videos
 * @param {*} filters Object with two parameters: seach and genre_id
 * @returns Filterd array of videos
 */
export const filterBySearchAndGenres = (videos, filters) => {
  return videos
    .filter(({ title, artist, genre_id }) => {
      const isVideoFound = stringIncludes(title, filters.search) ||
        stringIncludes(artist, filters.search);
      if (filters.genre_id.length > 0) {
        return filters.genre_id.some(genre => genre === genre_id) && isVideoFound;
      }
      return isVideoFound;
    });
}

/**
 * Set or remove unique genre into filters array 
 * @param {*} genresArray Array of genres
 * @param {*} genreId Genre ID
 * @returns Updated array of selected genres
 */
export const setUniqueGenre = (genresArray, genreId) => {
  if (genresArray.indexOf(genreId) > -1) {
    return genresArray.filter(i => i !== genreId)
  }
  return [...genresArray, genreId];
}

