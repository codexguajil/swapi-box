export const movie = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return action.movie;
    default:
      return state;
  }
}