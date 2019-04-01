import { combineReducers } from 'redux';
import { movie } from './movie';
import { people } from './people';
import { clickedButton } from './clickedButton';

export const rootReducer = combineReducers({
  clickedButton,
  movie,
  people,
})