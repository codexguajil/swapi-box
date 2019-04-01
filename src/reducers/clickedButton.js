export const clickedButton = (state = '', action) => {
  switch (action.type) {
    case 'CLICKED_BUTTON':
      return action.value;
    default:
      return state;
  }
}