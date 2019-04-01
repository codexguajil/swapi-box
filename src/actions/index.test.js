import * as actions from './index';
import { mockFilms } from '../utils/mockData';

describe('actions', () => {
  describe('addMovies', () => {
    it('should return a type ADD_MOVIES with the random film object', () => {
      const expected = {
        type: 'ADD_MOVIE',
        movies: mockFilms
      }

      const result = actions.addMovie(mockFilms)

      expect(result).toEqual(expected)
    })
  })
})