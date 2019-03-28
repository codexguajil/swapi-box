import * as actions from './index';
import { mockFilms } from '../utils/mockData';

describe('actions', () => {
  describe('addMovies', () => {
    it.only('should return a type ADD_MOVIES with the star wars films', () => {
      const expected = {
        type: 'ADD_MOVIES',
        movies: mockFilms
      }

      const result = actions.addMovies(mockFilms)

      expect(result).toEqual(expected)
    })
  })
})