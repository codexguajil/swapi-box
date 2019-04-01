import { fetchAnything } from './apiCalls';

export const peopleCleaner = (data) => {
  return data.map(person => {
    return {
            name: person.name,
            homeUrl: person.homeworld,
            speciesUrl: person.species[0],
    }
  })
}

export const homeWorldData = async (data) => {
  const promises =  data.map(person => {
    return fetchAnything(person.homeUrl)
  })
  return Promise.all(promises);
}

export const speciesData = async (data) => {
  const promises = data.map(person => {
    return fetchAnything(person.speciesUrl)
  })
  return Promise.all(promises)
}

export const speciesDataCleaner = (data) => {
  return data.map(species => {
    return species.name
  })
}

export const combineData = (people, planets, species) => {
  return people.map((person,i) => {
    return {
      name: person.name,
      homeworld: planets[i].name,
      species: species[i],
      population: planets[i].population
    }
  })
}








//     } else if (path === 'planets') {
//         try {
//             let objectValues = array.map(item => {
//                 return {name: item.name,
//                         terrain: item.terrain,
//                         population: item.population,
//                         climate: item.climate,
//                         residents: item.residents
//                 }
//             })
//             return objectValues
//         } catch(error) {
//             return error.message
//         }
//     } else if (path === 'vehicles') {
//         try {
//             let objectValues = array.map(item => {
//                 return {name: item.name,
//                         model: item.model,
//                         class: item.vehicle_class,
//                         passengers: item.passengers
//                 }
//             })
//             return objectValues
//         } catch(error) {
//             return error.message
//         }
//     }
    
// }