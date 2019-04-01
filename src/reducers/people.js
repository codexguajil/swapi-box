export const people = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PEOPLE':
      return action.people;
    default:
      return state;
  }
}