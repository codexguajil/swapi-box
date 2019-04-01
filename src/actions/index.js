export const addMovie = (movie) => ({
  type: "ADD_MOVIE",
  movie,
})

export const addPeople = (people) => ({
  type: "ADD_PEOPLE",
  people
})

export const clickedButton = (value) => ({
  type: "CLICKED_BUTTON",
  value
})